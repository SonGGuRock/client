import Link from 'next/link';
import Title from '../../shared/ui/atoms/Title';
import Button from '../../shared/ui/atoms/button/Button';
import Image from 'next/image';
import StudentsTab from '../../ui/students/StudentsTab';
import BottomBar from '../../shared/ui/modules/BottomBar';
import StudentsWithSearch from '@/app/widget/students/ui/students-with-search';

const Page = () => {
  return (
    <div className='py-3'>
      <div className=' px-4 flex w-full items-center justify-between text-lg font-semibold'>
        <div className='flex gap-1 items-center'>
          <Title>수강생</Title>
        </div>
        <Link href='/students/create'>
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
            새 등록
          </Button>
        </Link>
      </div>

      <StudentsTab />
      <StudentsWithSearch />
      <BottomBar />
    </div>
  );
};

export default Page;
