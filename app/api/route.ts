// import { getAsync } from '@/app/shared/api/fetch';

// import { NextRequest, NextResponse } from 'next/server';

// export async function GET(request: NextRequest) {
//   const res = await getAsync(
//     'members/login',
//   );

//   const accessToken  = request.cookies.get('access_token')

//   if (!accessToken) {
//     return NextResponse.redirect(new URL('/signin', request.url));
//   }

//   const requestHeaders = new Headers(request.headers);
//     requestHeaders.set('Authorization', `Bearer ${token}`);

//   return NextResponse.json(res.result);
// }
