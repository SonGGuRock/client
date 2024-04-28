import Image from 'next/image';
import { WORK_STEP, WorkStepType } from '../../../shared/atoms/work-step-label';
import { ClassNamesProps } from '@/app/widget/reservations/ui/class-time-picker';

export interface WorkstepProps extends ClassNamesProps {
  workstep: WorkStepType['ko'];
  style?: 'black';
}
const CraftItemWorkstep = ({ workstep, classNames, style }: WorkstepProps) => {
  return (
    <span
      className={`w-fit flex gap-[2px] py-1 pl-1 pr-2 itmes-center rounded-tl-lg rounded-br-lg ${
        style === 'black' && 'bg-grey900'
      } ${classNames}`}
    >
      <Image
        className={`${style === 'black' && 'invert'}`}
        src={`/icon/workstep/ic-${
          WORK_STEP.find((item) => item.ko === workstep)?.en
        }-24px.svg`}
        alt={`${workstep} 아이콘`}
        width={20}
        height={20}
      />
      <span
        className={`inline-flex items-center text-xs  ${
          style === 'black' && 'text-white'
        } `}
      >
        {workstep}
      </span>
    </span>
  );
};

export default CraftItemWorkstep;
