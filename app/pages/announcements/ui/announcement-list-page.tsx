'use client';

import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import Back from '@/app/shared/atoms/Back';
import Button from '@/app/shared/atoms/button/Button';
import Title from '@/app/shared/atoms/Title';
import { AnnouncmentRepresentitive } from '@/app/widget/announcements/lib/type';
import Image from 'next/image';
import Link from 'next/link';
import ArticlePreview from '@/app/shared/modules/ArticlePreview';
import { useRouter } from 'next/navigation';

const AnnouncementListPage = () => {
  const router = useRouter();
  const announcements =
    useQueryWithCredentials<AnnouncmentRepresentitive[]>('announcements');

  return (
    <div className='py-3 px-4'>
      <div className='flex w-full items-center justify-between text-lg font-semibold'>
        <div className='flex gap-1 items-center'>
          <Back
            onClick={() => {
              router.push('/home');
            }}
          />
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
      {announcements &&
        [
          ...announcements
            .filter(
              (announcement) => announcement.is_representative_announcement
            )
            .reverse(),
          ...announcements
            .filter(
              (announcement) => !announcement.is_representative_announcement
            )
            .reverse(),
        ].map((announcement) => (
          <div key={announcement.id} className='pt-4 first:pt-0'>
            <Link href={`/announcements/${announcement.id}`}>
              <ArticlePreview content={announcement} />
            </Link>
          </div>
        ))}
    </div>
  );
};

export default AnnouncementListPage;
