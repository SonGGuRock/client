import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = cookies();
  const isAdmin = cookieStore.get('ISADMIN')?.value;

  return NextResponse.json({
    isAdmin,
  });
}

export async function DELETE() {
  const cookieStore = cookies();
  cookieStore.delete('WORKSHOPID');
  return NextResponse.json({
    result: 'ID deleted',
  });
}
