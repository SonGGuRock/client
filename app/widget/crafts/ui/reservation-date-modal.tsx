import useModal from '@/app/shared/modules/modal/lib/useModal';
import StudentAllVisitCalendar from '../../reservations/ui/student-all-visit-calendar';

interface ReservationDateModalProps {
  studentId: number;

  onSelectDate: (id: number, date: string) => void;
}

const ReservationDateModal = ({
  studentId,
  onSelectDate,
}: ReservationDateModalProps) => {
  // TODO: 분리
  const { closeModal } = useModal();
  // const { form: craftCreateBody } = useFormFill(CraftCreateContext);
  // const { form: craftItemCreateBody, fill: fillCraftItemCreateBody } =
  //   useFormFill(CraftItemMutateContext);

  const handleClickDate = (id: number, date: string) => {
    // fillCraftItemCreateBody({ reservation_id: id });
    onSelectDate(id, date);
    closeModal();
  };
  return (
    <div className='w-full flex flex-wrap gap-[6px]'>
      <StudentAllVisitCalendar
        studentId={studentId}
        onClickDate={handleClickDate}
      />
    </div>
  );
};

export default ReservationDateModal;
