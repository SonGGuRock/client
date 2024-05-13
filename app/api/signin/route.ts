import { postAsync } from '@/app/shared/api/fetch';
import {
  SigninRequest,
  SigninResponse,
} from '@/app/widget/auth/signin/api/type';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body: SigninRequest = await request.json();
  const res = await postAsync<SigninRequest, SigninResponse>(
    'members/login',
    body
  );

  const cookiesStore = cookies();
  cookiesStore.set('accessToken', res.data.access_token);
  cookiesStore.set('refreshToken', res.data.refresh_token);

  return NextResponse.json(res.result);
}
