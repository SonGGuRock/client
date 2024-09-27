'use client';

import DropDown from '@/app/shared/atoms/drop-down';
import Link from 'next/link';
import { StudentMain } from '@/app/widget/students/ui/student-list-item';
import useSearchStudentsByInitial, {
  StudentSearchParams,
} from '../lib/useSearchByInitial';
import Search from '@/app/shared/modules/Search';
import StudentsTab from './students-tab';
import EmptyDataNotice from '@/app/shared/atoms/EmptyDataNotice';
import Loader from '@/app/shared/atoms/loader';

const StudentsWithSearch = () => {
  const {
    searchKeyword,
    handleKeywordChange,
    handleParams,
    searchedStudents,
    tabActiveStatus,
  } = useSearchStudentsByInitial();

  const onSelect = (value: StudentSearchParams['sort']) => {
    handleParams({ sort: value });
  };

  if (!searchedStudents) return <Loader />;
  return (
    <>
      <StudentsTab onSwitch={handleParams} />
      <div className='flex justify-between p-4'>
        <Search keyword={searchKeyword} handleChange={handleKeywordChange} />
        <DropDown onChange={onSelect}>
          <DropDown.Option value='count'>횟수순</DropDown.Option>
          <DropDown.Option value='name'>이름순</DropDown.Option>
          <DropDown.Option value='register_date'>등록순</DropDown.Option>
        </DropDown>
      </div>

      <div className='px-4 flex flex-wrap'>
        {searchedStudents.map((student) => (
          <Link
            key={student.id}
            href={`/students/${student.id}`}
            className={`border-b border-grey100 w-full py-3 last:border-none ${
              tabActiveStatus === 0 && 'opacity-50'
            }`}
          >
            <StudentMain>
              <StudentMain.Thumbnail
                id={student.id}
                imageUrl={student.profile_picture}
                type='student'
              />
              <StudentMain.Name>{student.name}</StudentMain.Name>
              <StudentMain.RemainingClassCount>
                {student.remaining_class_count}
              </StudentMain.RemainingClassCount>
            </StudentMain>
          </Link>
        ))}
        {searchedStudents?.length === 0 && (
          <EmptyDataNotice>등록된 수강생이 없습니다</EmptyDataNotice>
        )}
      </div>
    </>
  );
};

export default StudentsWithSearch;
