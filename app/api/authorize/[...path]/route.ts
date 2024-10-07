import { NextRequest, NextResponse } from 'next/server';
import https from 'https';
import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '@/app/shared/api/axios-instance';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
});

export async function POST(req: NextRequest) {
  const body = await req.json();

  const endpoint = req.nextUrl.pathname.replace('/api/authorize', '');

  try {
    const response: AxiosResponse = await instance.post(endpoint, body);

    const data = response.data;
    return NextResponse.json(data, { status: response.status });
  } catch (error: any) {
    console.log('📌📌📌📌📌📌', error.message);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  // 디버깅을 위한 URL 변환 로직 확인
  const endpoint = req.nextUrl.pathname.replace('/api/authorize', '');

  try {
    const response: AxiosResponse = await instance.get(endpoint);

    const data = response.data;
    return NextResponse.json(data, { status: response.status });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
