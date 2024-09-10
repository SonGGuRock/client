'use client';
import Image from 'next/image';
import { ClassNamesProps } from '../../reservations/ui/class-time-picker';
import CraftItemWorkstep from './craft-item-workstep';
import { CraftSummary } from '@/app/entities/crafts/types';
import useWorkStep from '@/app/entities/crafts/hooks/useWorkStep';

export interface CraftThumbnailProps extends ClassNamesProps {
  craft: CraftSummary;
  showWorkStatus: boolean;
}

export default function CraftThumbnail({
  craft,
  showWorkStatus,
  classNames,
}: CraftThumbnailProps) {
  const { getWorkStepEn } = useWorkStep();
  return (
    <div className={`relative list-none ${classNames}`}>
      {showWorkStatus && craft.now_work_step && (
        <CraftItemWorkstep
          classNames='absolute left-0 top-0'
          workstep={getWorkStepEn(craft.now_work_step)!}
          style='black'
        />
      )}
      <Image
        className='rounded-lg object-cover block w-full h-full'
        src='/mock/refire.png'
        alt='craft mock'
        width={88}
        height={88}
      />
    </div>
  );
}
