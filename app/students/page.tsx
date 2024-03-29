import Link from 'next/link';
import Title from '../ui/shared/atoms/Title';
import Button from '../ui/shared/atoms/button/Button';
import Image from 'next/image';
import TabLayout from '../ui/shared/modules/tab/TabLayout';
import TabMenu from '../ui/shared/modules/tab/TabMenu';
import StudentTab from '../ui/students/StudentTab';
import StudentsTab from '../ui/students/StudentsTab';
import Search from '../ui/shared/modules/Search';
import { Select } from '../ui/shared/atoms/drop-down/Select';
import DropDown from '../ui/shared/atoms/drop-down';
import { StudentMain } from '../ui/students/student';
import BottomBar from '../ui/shared/modules/BottomBar';

const Page = () => {
  return (
    <div className='py-3'>
      <div className=' px-4 flex w-full items-center justify-between text-lg font-semibold'>
        <div className='flex gap-1 items-center'>
          <Title title='수강생' />
        </div>
        <Link href='/students/create'>
          <Button
            size='small'
            text='새 등록'
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
