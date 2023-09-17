import { getSiteSettings } from '@/lib/providers/sanity/sanity'
import { PortableBlogText } from '@/ui/Components/PortableBlogText/PortableBlogText'
import PortableText from '@/ui/Components/PortableText/PortableText'
import React from 'react'

export const revalidate = 0

async function page() {
    const settings = await getSiteSettings()

    if (!settings) {
      return <p>Loading...</p>
    }

    console.log(settings)
  return settings &&  (
    <div className='mt-16 bg-zinc-100 dark:bg-zinc-950'>
        <div className='p-8 max-w-5xl mx-auto'>
        <h1 className='text-black dark:text-white text-3xl font-owners font-semibold'>Privacy Policy</h1>

         <PortableBlogText content={settings?.privacyPolicy}/>
        </div>
        </div>
  )
}

export default page