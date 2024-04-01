import Back from '@/app/shared/ui/atoms/Back';
import Button from '@/app/shared/ui/atoms/button/Button';
import Title from '@/app/shared/ui/atoms/Title';
import ArtilcePreview from '@/app/shared/ui/modules/ArticlePreview';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <div className='py-3 px-4'>
      <div className='flex w-full items-center justify-between text-lg font-semibold'>
        <div className='flex gap-1 items-center'>
          <Back />
          <Title title='공지사항' />
        </div>
        <Link href='/home/announcement/create'>
          <Button
            size='small'
            text='글 작성'
            icon={
              <Image
                src='/icon/ic_plus_white.svg'
                alt='추가 버튼'
                width={18}
                height={18}
              />
            }
          />
        </Link>
      </div>

      <div className='pt-4 first:pt-0'>
        <Link href='/home/announcement/1'>
          <ArtilcePreview title='12/31 쉽니다' updated_at='2024-01-24' />
        </Link>
      </div>
      <div className='pt-4 first:pt-0'>
        <Link href='/home/announcement/1'>
          <ArtilcePreview title='12/31 쉽니다' updated_at='2024-01-24' />
        </Link>
      </div>
    </div>
  );
};

export default Page;
