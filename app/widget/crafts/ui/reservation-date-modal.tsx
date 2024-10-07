import { CraftItemMutateContext } from '@/app/_provider/craft-item-create-provider';
import useModal from '@/app/shared/modules/modal/lib/useModal';
import useFormFill from '@/app/shared/modules/stepper/lib/use-form-fill';
import StudentAllVisitCalendar from '../../reservations/ui/student-all-visit-calendar';
import { CraftCreateContext } from '@/app/_provider/craft-create-provide';

interface ReservationDateModalProps {
  onSelectDate: (date: string) => void;
}

const ReservationDateModal = ({ onSelectDate }: ReservationDateModalProps) => {
  const { closeModal } = useModal();
  const { form: craftCreateBody } = useFormFill(CraftCreateContext);
  const { form: craftItemCreateBody, fill: fillCraftItemCreateBody } =
    useFormFill(CraftItemMutateContext);

  const handleClickDate = (id: number, date: string) => {
    fillCraftItemCreateBody({ reservation_id: id });
    onSelectDate(date);
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
