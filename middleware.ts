import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

export async function middleware(req: NextRequest) {
  const res = NextResponse.redirect(new URL("/", req.url));
  const user = NextResponse.next();
  const nonce = uuid();
  console.log(nonce);

  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // if (session) {
  //   return user;
  // } else {
  //   return res;
  //  }
}

//export const config = {
//  matcher: ["/portal/:path*"],
//};
