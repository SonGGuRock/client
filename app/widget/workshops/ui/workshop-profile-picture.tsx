'use client';

import Image from 'next/image';
import { ClassNamesProps } from '../../reservations/ui/class-time-picker';

interface WorkshopProfilePictureProps extends ClassNamesProps {
  onClick: () => void;
}

const WorkshopProfilePicture = ({
  onClick,
  classNames,
}: WorkshopProfilePictureProps) => {
  return (
    <div onClick={onClick} className={`my-6 ${classNames}`}>
      <Image
        src={'/img/workshop_default.png'}
        alt='공방 기본 이미지'
        width={343}
        height={136}
      />
    </div>
  );
};

export default WorkshopProfilePicture;
