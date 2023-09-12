import { NextResponse } from 'next/server';
import { validateRequest } from '@/lib/hooks/validateRequest';
import { getAllCourses, imageBuilder } from '@/lib/providers/sanity/sanity';
import { supabaseApi } from '@/lib/providers/supabase/routerHandler';

export const dynamic = 'force-dynamic'
export async function POST(req: Request) {
    try {
      if (req.method === 'POST') {
        const validationResponse = await validateRequest(req);
  
        if (validationResponse) {
          return validationResponse;
        }
  
        // Fetch course data from Sanity CMS
        const sanityCourses = await getAllCourses();
  
        // Upsert all courses into Supabase
        const upsertPromises = sanityCourses.map(async (sanityCourse: any) => {
          const { _id, title, categories, lessons, image:images } = sanityCourse;
  
          // Extract titles from lessons and categories arrays
          const lessonTitles = lessons?.map((lesson: any) => lesson?.title).filter(Boolean);
          const categoryTitles = categories?.map((category: any) => category?.title).filter(Boolean);
          const moduleCount: number = lessons?.map((lesson: any) => lesson?.modules.length)

          const image: any | null = images?.map((image: any) => imageBuilder(image))
          const courseData = {
            id: _id, // Use the _id from Sanity as the id in Supabase
            title,
            lessons: lessonTitles || [],
            categories: categoryTitles || [],
            image,
            total_lessons: lessonTitles.length as number,
            total_modules: moduleCount,
            

          };
  
          const { data, error } = await supabaseApi
            .from('courses')
            .upsert([courseData], {onConflict: 'id'}) // Specify the conflict resolution strategy here
            .select();
          console.log(data);
          if (error) {
            console.error('Error syncing data to Supabase:', error);
          }
        });
  
        // Wait for all upserts to finish
        await Promise.all(upsertPromises);
  
        return NextResponse.json({
          success: 'Course data synced to Supabase successfully',
          status: 200,
        });
      } else {
        return NextResponse.json({
          error: 'Method not allowed, or working, please update and try again',
          status: 405,
        });
      }
    } catch (error) {
      // Handle any unexpected errors here
      console.error('Error in webhook processing:', error);
      return NextResponse.json({
        error: 'Internal server error',
        status: 500,
      });
    }
  }
  