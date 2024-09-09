import { CraftItemCreateContext } from '@/app/_provider/craft-item-create-provider';
import useModal from '@/app/shared/modules/modal/lib/useModal';
import useFormFill from '@/app/shared/modules/stepper/lib/use-form-fill';
import StudentAllVisitCalendar from '../../reservations/ui/student-all-visit-calendar';
import { CraftCreateContext } from '@/app/_provider/craft-create-provide';

const ReservationDateModal = () => {
  const { closeModal } = useModal();
  const { form: craftCreateBody } = useFormFill(CraftCreateContext);
  const { form: craftItemCreateBody, fill: fillCraftItemCreateBody } =
    useFormFill(CraftItemCreateContext);

  const handleClickDate = (id: number) => {
    fillCraftItemCreateBody({ reservation_id: id });
    closeModal();
  };
  return (
    <div className='w-full flex flex-wrap gap-[6px]'>
      {craftCreateBody.student_id && (
        <StudentAllVisitCalendar
          studentId={craftCreateBody.student_id}
          onClickDate={handleClickDate}
        />
      )}
    </div>
  );
};

export default ReservationDateModal;
