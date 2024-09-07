'use client';

import { StudentMain } from '@/app/widget/students/ui/student-list-item';
import useSearchStudentsByInitial from '../../students/lib/useSearchByInitial';
import Search from '@/app/shared/modules/Search';
import CheckBox from '@/app/shared/atoms/CheckBox';
import { StepStudentProps } from './step-student';
import useFormFill from '@/app/shared/modules/stepper/lib/use-form-fill';
import { Student } from '@/app/lib-temp/definition';

interface WithStudnetId {
  student_id: number;
}

const StudentsWithSearch = ({ context }: StepStudentProps) => {
  const { form, fill } = useFormFill(context);
  const { searchKeyword, handleKeywordChange, searchedStudents } =
    useSearchStudentsByInitial();

  if (!searchedStudents) {
    return <div>loading</div>;
  }
  return (
    <>
      <div className='flex justify-between py-4'>
        <Search
          classNames='w-full'
          keyword={searchKeyword}
          handleChange={handleKeywordChange}
        />
      </div>
      <div>
        {searchedStudents.map((student, idx) => (
          <div
            key={`${student}-${idx}`}
            className='w-full flex items-center gap-2 py-3 border-b border-grey100 last:border-0'
            onClick={() => {
              const added = { ...form, student_id: student.id };
              fill(added);
            }}
          >
            <StudentMain key={`${idx}-${student}`}>
              <StudentMain.Thumbnail
                id={1}
                imageUrl={student.profile_picture}
                type='student'
              />
              <StudentMain.Name>{student.name}</StudentMain.Name>
            </StudentMain>
            {/* {form[`student_id`] && form[`student_id`] === student.id && (
              <CheckBox isReadOnly={true} isChecked={true} style='grey' />
            )} */}
          </div>
        ))}
      </div>
    </>
  );
};

export default StudentsWithSearch;
