'use client';

import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import Back from '@/app/shared/atoms/Back';
import Button from '@/app/shared/atoms/button/Button';
import Title from '@/app/shared/atoms/Title';
import ArtilcePreview from '@/app/shared/modules/ArticlePreview';
import {
  Announcment,
  AnnouncmentRepresentitive,
} from '@/app/widget/announcements/lib/type';
import Image from 'next/image';
import Link from 'next/link';

const AnnouncementListPage = () => {
  const { data: announcements } =
    useQueryWithCredentials<AnnouncmentRepresentitive[]>('announcements');

  return (
    <div className='py-3 px-4'>
      <div className='flex w-full items-center justify-between text-lg font-semibold'>
        <div className='flex gap-1 items-center'>
          <Back />
          <Title>공지사항</Title>
        </div>
        <Link href='/announcements/create'>
          <Button
            size='small'
            icon={
              <Image
                src='/icon/ic_plus_white.svg'
                alt='추가 버튼'
                width={18}
                height={18}
              />
            }
          >
            글 작성
          </Button>
        </Link>
      </div>
      {announcements?.map((announcement) => (
        <div key={announcement.id} className='pt-4 first:pt-0'>
          <Link href={`/announcements/${announcement.id}`}>
            <ArtilcePreview
              title={announcement.content}
              updated_at='2024-01-24'
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AnnouncementListPage;
