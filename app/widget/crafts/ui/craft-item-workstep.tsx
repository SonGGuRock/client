import Image from 'next/image';
import { ClassNamesProps } from '@/app/widget/reservations/ui/class-time-picker';
import { WORK_STEP_MAP } from '@/app/entities/crafts/constants';
import useWorkStep from '@/app/entities/crafts/hooks/useWorkStep';

export interface WorkstepProps extends ClassNamesProps {
  workstep: number;
  style?: 'black';
}
const CraftItemWorkstep = ({ workstep, classNames, style }: WorkstepProps) => {
  const { getWorkStepEn } = useWorkStep();
  const formatted = getWorkStepEn(workstep);
  return (
    <span
      className={`w-fit flex gap-[2px] py-1 pl-1 pr-2 itmes-center rounded-tl-lg rounded-br-lg ${
        style === 'black' && 'bg-grey900'
      } ${classNames}`}
    >
      <Image
        className={`${style === 'black' && 'invert'}`}
        src={`/icon/workstep/ic-${formatted}-24px.svg`}
        alt={`${formatted} 아이콘`}
        width={20}
        height={20}
      />
      <span
        className={`inline-flex items-center text-xs  ${
          style === 'black' && 'text-white'
        } `}
      >
        {WORK_STEP_MAP[formatted!]}
      </span>
    </span>
  );
};

export default CraftItemWorkstep;
