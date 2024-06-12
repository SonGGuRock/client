'use client';

import DropDown from '@/app/shared/atoms/drop-down';
import Link from 'next/link';
import { StudentMain } from '@/app/widget/students/ui/student-list-item';
import useSearchByInitial from '../lib/useSearchByInitial';
import Search from '@/app/shared/modules/Search';
import { Student } from '@/app/lib-temp/definition';
import { StudentSearchParams } from '@/app/pages/students/ui/students-list-page';

interface StudentsWithSearch {
  students: Student[];
  onSort: (newParams: Partial<StudentSearchParams>) => void;
}

const StudentsWithSearch = ({ students, onSort }: StudentsWithSearch) => {
  const { keyword, handleChange, searched } = useSearchByInitial(students);
  return (
    <>
      <div className='flex justify-between p-4'>
        <Search keyword={keyword} handleChange={handleChange} />
        <DropDown onSort={onSort}>
          <DropDown.Option value='count'>횟수순</DropDown.Option>
          <DropDown.Option value='name'>이름순</DropDown.Option>
          <DropDown.Option value='register_date'>등록순</DropDown.Option>
        </DropDown>
      </div>

      <div className='px-4 flex flex-wrap'>
        {searched?.map((student) => (
          <Link
            key={student.id}
            href={`/students/${student.id}`}
            className='border-b border-grey100 w-full py-3 last:border-none'
          >
            <StudentMain>
              <StudentMain.Thumbnail
                id={student.id}
                imageUrl={student.profile_picture}
              />
              <StudentMain.Name>{student.name}</StudentMain.Name>
              <StudentMain.RemainingClassCount>
                {student.remaining_class_count}
              </StudentMain.RemainingClassCount>
            </StudentMain>
          </Link>
        ))}
      </div>
    </>
  );
};

export default StudentsWithSearch;
