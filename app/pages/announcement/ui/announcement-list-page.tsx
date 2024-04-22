import Back from '@/app/shared/atoms/Back';
import Button from '@/app/shared/atoms/button/Button';
import Title from '@/app/shared/atoms/Title';
import ArtilcePreview from '@/app/shared/modules/ArticlePreview';
import Image from 'next/image';
import Link from 'next/link';

const AnnouncementListPage = () => {
  return (
    <div className='py-3 px-4'>
      <div className='flex w-full items-center justify-between text-lg font-semibold'>
        <div className='flex gap-1 items-center'>
          <Back />
          <Title>공지사항</Title>
        </div>
        <Link href='/announcement/create'>
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

      <div className='pt-4 first:pt-0'>
        <Link href='/announcement/1'>
          <ArtilcePreview title='12/31 쉽니다' updated_at='2024-01-24' />
        </Link>
      </div>
      <div className='pt-4 first:pt-0'>
        <Link href='/announcement/1'>
          <ArtilcePreview title='12/31 쉽니다' updated_at='2024-01-24' />
        </Link>
      </div>
    </div>
  );
};

export default AnnouncementListPage;