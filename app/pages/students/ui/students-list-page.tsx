'use client';

import Link from 'next/link';
import Image from 'next/image';
import StudentsWithSearch from '@/app/widget/students/ui/students-with-search';
import Title from '@/app/shared/atoms/Title';
import Button from '@/app/shared/atoms/button/Button';
import BottomBar from '@/app/shared/modules/BottomBar';

const StudentsListPage = () => {
  return (
    <div className='py-3'>
      <div className=' px-4 flex w-full items-center justify-between text-lg font-semibold'>
        <div className='flex gap-1 items-center'>
          <Title>수강생</Title>
        </div>
        <Link href='/students/create'>
          <Button
            size='small'
            style='primary'
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

      <StudentsWithSearch />
      <BottomBar />
    </div>
  );
};

export default StudentsListPage;
