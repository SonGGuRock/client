'use client';

import { Student, StudentDetail } from '@/app/lib-temp/definition';
import Thumbnail from '../../../shared/atoms/Thumbnail';
import PhoneNumberBox from '../../../shared/modules/phone-number/PhoneNumber';
import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import IconPlusCircle from '@/app/shared/atoms/icons/icon-plus-circle';
import useModal from '@/app/shared/modules/modal/lib/useModal';
import ReservationAddModal from '../../reservations/ui/modal/reservation-add-modal';

interface StudentInfoProps {
  id: Student['id'];
}

const StudentInfo = ({ id }: StudentInfoProps) => {
  const { data: student, isLoading } = useQueryWithCredentials<StudentDetail>(
    `students/${id}`
  );
  if (isLoading) return <div>학생 정보를 불러오고 있어요</div>;
  if (!student) return <div>학생을 찾을 수 없습니다</div>;

  const { openModal } = useModal();

  const handleAddButton = () => {
    openModal(<ReservationAddModal studentId={id} />);
  };

  return (
    <div className='pb-8 px-4'>
      <div className='grid justify-items-center pt-4 pb-8'>
        <Thumbnail
          id={student.id}
          imageUrl={student.profile_picture}
          size='large'
        />
        <p className='pt-2 pb-4 text-center'>{student.name}</p>
        <PhoneNumberBox phoneNumber={student.phone_number} />
      </div>

      <div className='grid grid-cols-2 grid-rows-2 gap-2'>
        <div className='bg-grey50 p-3 rounded-lg'>
          <label className='text-xs text-grey400'>등록일</label>
          <p className='text-sm text-grey800'>{student.register_date}</p>
        </div>
        <div className='bg-grey50 p-3 rounded-lg'>
          <label className='text-xs text-grey400'>지난 결제일</label>
          <p className='text-sm text-grey800'>{student.last_payment_date}</p>
        </div>
        <div
          className='bg-grey50 p-3 rounded-lg flex justify-between'
          onClick={handleAddButton}
        >
          <div>
            <label className='text-xs text-grey400'>수강횟수</label>
            <p className='text-sm text-grey800'>
              {student.remaining_class_count}/{student.total_class_count}
            </p>
          </div>
          <IconPlusCircle />
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
