import { NextResponse } from 'next/server';

export function middleware(req: Request) {
  const res = NextResponse.next();

  res.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.headers.set('Pragma', 'no-cache');
  res.headers.set('Expires', '0');

  return res;
}
