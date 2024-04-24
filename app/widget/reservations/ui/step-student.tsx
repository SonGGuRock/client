'use client';

import { StudentMain } from '@/app/widget/students/ui/student-list-item';
import Search from '@/app/shared/modules/Search';
import useSearchByInitial from '../../students/lib/useSearchByInitial';
import Title from '@/app/shared/atoms/Title';
import CheckBox from '@/app/shared/atoms/CheckBox';
import { SubmissionContext } from '@/app/_provider/reservation-create-provider';
import { Context } from 'react';
import useFormFill from '../../../shared/modules/stepper/lib/use-form-fill';
import { CraftItem } from '@/app/pages/crafts/items/craft-item-create.page';
import { Reservation } from '@/app/pages/reservations/ui/reservations-create-page';

interface StepStudentProps {
  context: Context<SubmissionContext<Reservation | CraftItem> | null>;
}

function StepStudent({ context }: StepStudentProps) {
  const { form, fill } = useFormFill(context);
  const { keyword, handleChange, searched } = useSearchByInitial();

  return (
    <div>
      <div>
        <Title size='large'>수강생을 선택해주세요</Title>
      </div>
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
            className='w-full flex gap-2 py-3 border-b border-grey100 last:border-0'
            onClick={() => {
              const added = { ...form, student_name: student };
              fill(added);
            }}
          >
            <StudentMain key={`${idx}-${student}`}>
              <StudentMain.Thumbnail id={1} />
              <StudentMain.Name>{student}</StudentMain.Name>
            </StudentMain>
            {form.student_name === student && (
              <CheckBox isReadOnly={true} isChecked={true} style='grey' />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StepStudent;
