'use client';

import { StudentMain } from '@/app/widget/students/ui/student-list-item';
import { Student } from '@/app/lib-temp/definition';
import useSearchStudentsByInitial from '../../students/lib/useSearchByInitial';
import Search from '@/app/shared/modules/Search';
import CheckBox from '@/app/shared/atoms/CheckBox';
import { StepStudentProps } from './step-student';
import useFormFill from '@/app/shared/modules/stepper/lib/use-form-fill';
import { useEffect } from 'react';

interface StudentsWithSearch extends StepStudentProps {
  students: Student[];
}

const StudentsWithSearch = ({ students, context }: StudentsWithSearch) => {
  const { form, fill } = useFormFill(context);
  const { keyword, handleChange, searched } =
    useSearchStudentsByInitial(students);

  useEffect(() => {
    console.log(form);
  }, [form]);
  return (
    <>
      <div className='flex justify-between py-4'>
        <Search
          classNames='w-full'
          keyword={keyword}
          handleChange={handleChange}
        />
      </div>
      <div>
        {searched.map((student, idx) => (
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
              />
              <StudentMain.Name>{student.name}</StudentMain.Name>
            </StudentMain>
            {form.student_id === student.id && (
              <CheckBox isReadOnly={true} isChecked={true} style='grey' />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default StudentsWithSearch;
