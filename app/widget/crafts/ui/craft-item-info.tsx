import CraftItemWorkstep from '@/app/widget/crafts/ui/craft-item-workstep';
import CraftItemInfoItem from './craft-item-info-item';
import { ClassNamesProps } from '../../reservations/ui/class-time-picker';
import { WorkStepType } from '@/app/shared/atoms/work-step-label';

interface CraftItemInfoProps extends ClassNamesProps {
  workstep: WorkStepType['en'];
  classDate: string;
}

const CraftItemInfo = ({
  workstep,
  classDate,
  classNames,
}: CraftItemInfoProps) => {
  return (
    <div className={`flex gap-4 ${classNames}`}>
      <CraftItemInfoItem labelText='상태'>
        <CraftItemWorkstep classNames='opacity-60' workstep={workstep} />
      </CraftItemInfoItem>

      <CraftItemInfoItem labelText='수업일'>{classDate}</CraftItemInfoItem>
    </div>
  );
};

export default CraftItemInfo;
