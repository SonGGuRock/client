'use server';

import fs from 'fs';

export async function readFile() {
  // 파일을 비동기적으로 읽어옵니다.
  const file = await fs.promises.readFile('./localhost+2.pem');

  // Uint8Array를 Buffer로 변환합니다.
  const buffer = Buffer.from(file);

  // Buffer를 base64 문자열로 변환합니다.
  const base64String = buffer.toString('base64');

  return base64String;
}
