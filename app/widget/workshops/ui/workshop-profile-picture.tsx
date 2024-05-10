'use client';

import Image from 'next/image';
import { ClassNamesProps } from '../../reservations/ui/class-time-picker';
import Link from 'next/link';

interface WorkshopProfilePictureProps extends ClassNamesProps {
  id: string;
}

const WorkshopProfilePicture = ({
  id,
  classNames,
}: WorkshopProfilePictureProps) => {
  return (
    <Link href={`/workshops/${id}/settings`} className={`my-6 ${classNames}`}>
      <Image
        src={'/img/workshop_default.png'}
        alt='공방 기본 이미지'
        width={343}
        height={136}
      />
    </Link>
  );
};

export default WorkshopProfilePicture;
