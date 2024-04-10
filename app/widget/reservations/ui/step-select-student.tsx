'use client';

import { StudentMain } from '@/app/ui/students/student';
import Search from '@/app/shared/ui/modules/Search';
import useSearchByInitial from '../../students/lib/useSearchByInitial';
import Title from '@/app/shared/ui/atoms/Title';
import CheckBox from '@/app/shared/ui/atoms/CheckBox';
import { useContext } from 'react';
import { ReservationCreateContext } from '@/app/_provider/reservation-create-provider';

const StepSelectStudent = () => {
  const { keyword, handleChange, searched } = useSearchByInitial();
  const reservation = useContext(ReservationCreateContext);

  return (
    <div>
      <div className='pt-6 pb-4 px-4 '>
        <p className='pb-4 text-grey400 text-sm'>
          <span className='text-grey800 text-sm'>1</span> /4
        </p>
        <Title size='large'>수강생을 선택해주세요</Title>
      </div>
      <div className='flex justify-between p-4'>
        <Search
          className='w-full'
          keyword={keyword}
          handleChange={handleChange}
        />
      </div>

      <div className='px-4 '>
        {searched.map((student, idx) => (
          <div
            key={`${student}-${idx}`}
            className='w-full flex gap-2 py-3 border-b border-grey100 last:border-0'
            onClick={() => {
              const added = { ...reservation, student_name: student };
              reservation?.fill(added);
            }}
          >
            <StudentMain key={`${idx}-${student}`}>
              <StudentMain.Thumbnail id={1} />
              <StudentMain.Name>{student}</StudentMain.Name>
            </StudentMain>
            {reservation?.data?.student_name === student && (
              <CheckBox isReadOnly={true} isChecked={true} style='grey' />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepSelectStudent;
