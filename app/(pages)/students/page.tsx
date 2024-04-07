import Link from 'next/link';
import Title from '../../shared/ui/atoms/Title';
import Button from '../../shared/ui/atoms/button/Button';
import Image from 'next/image';
import StudentsTab from '../../ui/students/StudentsTab';
import Search from '../../shared/ui/modules/Search';
import DropDown from '../../shared/ui/atoms/drop-down';
import { StudentMain } from '../../ui/students/student';
import BottomBar from '../../shared/ui/modules/BottomBar';

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

      <div className='flex justify-between p-4'>
        <Search />
        <DropDown>
          <DropDown.Option value='횟수순'>횟수순</DropDown.Option>
        </DropDown>
      </div>

      <div className='px-4 flex flex-wrap'>
        <Link
          href={`/students/${1}`}
          className='border-b border-grey100 w-full py-3 last:border-none'
        >
          <StudentMain>
            <StudentMain.Thumbnail id={1} />
            <StudentMain.Name>최지영</StudentMain.Name>
            <StudentMain.RemainingClassCount>1</StudentMain.RemainingClassCount>
          </StudentMain>
        </Link>
        <Link
          href={`/students/${2}`}
          className='border-b border-grey100 w-full py-3 last:border-none'
        >
          <StudentMain>
            <StudentMain.Thumbnail id={2} />
            <StudentMain.Name>최지영</StudentMain.Name>
            <StudentMain.RemainingClassCount>1</StudentMain.RemainingClassCount>
          </StudentMain>
        </Link>
      </div>

      <BottomBar />
    </div>
  );
};

export default Page;
