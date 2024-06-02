import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const accessToken = req.cookies.get('accessToken')?.value;
  const { pathname } = req.nextUrl;
  const isAuthPage =
    pathname.includes('/signin') ||
    pathname.includes('/signup') ||
    pathname.includes('/reset-password');

  if (isStaticAssetRequest(req)) {
    return NextResponse.next();
  }

  if (!accessToken && !isAuthPage) {
    const url = req.nextUrl.clone();
    url.pathname = '/signin';
    return NextResponse.redirect(url);
  }

  if (accessToken && isAuthPage) {
    const url = req.nextUrl.clone();
    url.pathname = '/workshops';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!$).*)'],
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
