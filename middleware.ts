import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const accessToken = req.cookies.get('accessToken')?.value;
  const { pathname } = req.nextUrl;
  const isAuthPage =
    pathname.includes('/signin') || pathname.includes('/signup');

  // console.log('Request pathname:', pathname);
  // console.log('Access token:', accessToken);
  // console.log('Is auth page:', isAuthPage);

  if (isStaticAssetRequest(req)) {
    return NextResponse.next();
  }

  if (!accessToken && !isAuthPage) {
    const url = req.nextUrl.clone();
    url.pathname = '/signin';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!signin|signup|$).*)'],
};

function isStaticAssetRequest(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const assetExtensions = [
    '.js',
    '.css',
    '.png',
    '.jpg',
    '.svg',
    '.ico',
    '.woff',
    '.woff2',
  ];
  const isAssetRequest = assetExtensions.some((extension) =>
    pathname.endsWith(extension)
  );

  const isBundleRequest =
    pathname.startsWith('/_next/static') || pathname.startsWith('/_next/data');

  return isAssetRequest || isBundleRequest;
}
