'use client';

import DropDown from '@/app/shared/atoms/drop-down';
import Link from 'next/link';
import { StudentMain } from '@/app/widget/students/ui/student-list-item';
import useSearchByInitial from '../lib/useSearchByInitial';
import Search from '@/app/shared/modules/Search';

const StudentsWithSearch = () => {
  const { keyword, handleChange, searched } = useSearchByInitial();
  return (
    <>
      <div className='flex justify-between p-4'>
        <Search keyword={keyword} handleChange={handleChange} />
        <DropDown>
          <DropDown.Option value='횟수순'>횟수순</DropDown.Option>
        </DropDown>
      </div>

      <div className='px-4 flex flex-wrap'>
        {searched.map((student, idx) => (
          <Link
            key={`${student}-${idx}`}
            href={`/students/${1}`}
            className='border-b border-grey100 w-full py-3 last:border-none'
          >
            <StudentMain>
              <StudentMain.Thumbnail id={1} />
              <StudentMain.Name>{student}</StudentMain.Name>
              <StudentMain.RemainingClassCount>
                1
              </StudentMain.RemainingClassCount>
            </StudentMain>
          </Link>
        ))}
      </div>
    </>
  );
};

export default StudentsWithSearch;
