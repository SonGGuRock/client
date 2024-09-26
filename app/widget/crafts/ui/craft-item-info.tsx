import CraftItemWorkstep from '@/app/widget/crafts/ui/craft-item-workstep';
import CraftItemInfoItem from './craft-item-info-item';
import { ClassNamesProps } from '../../reservations/ui/class-time-picker';

interface CraftItemInfoProps extends ClassNamesProps {
  workstep: number;
  reservationDate: string;
}

const CraftItemInfo = ({
  workstep,
  reservationDate,
  classNames,
}: CraftItemInfoProps) => {
  return (
    <div className={`flex gap-4 ${classNames}`}>
      <CraftItemInfoItem labelText='상태'>
        <CraftItemWorkstep classNames='opacity-60' workstep={workstep} />
      </CraftItemInfoItem>
      <CraftItemInfoItem labelText='수업일'>
        {reservationDate}
      </CraftItemInfoItem>
    </div>
  );
};

export default CraftItemInfo;
