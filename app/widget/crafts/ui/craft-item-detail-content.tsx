'use client';

import Image from 'next/image';
import CraftItemAuthor from './craft-item-detail-author';
import CraftItemInfo from './craft-item-info';
import Textarea from '@/app/shared/atoms/textarea';
import { useParams } from 'next/navigation';
import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import { CraftItemDetail } from '@/app/entities/crafts/types';

const CraftItemDetailContent = () => {
  const params = useParams();
  const itemId = params.id as string;
  const { data: craftDetail } = useQueryWithCredentials<CraftItemDetail>(
    `/crafts/items/${itemId}`
  );
  if (!craftDetail) return <div>loading now</div>;
  return (
    <div>
      <Image
        src={`${craftDetail.picture ?? '/mock/craft-item-detail-mock.png'}`}
        alt={`${craftDetail.craft_name ?? 'craft-item-detail-mock'}`}
        width={375}
        height={480}
        className='w-full'
      />
      <div className='px-4'>
        <CraftItemAuthor
          author={craftDetail.student}
          updatedAt={craftDetail.updated_at}
        />

        <CraftItemInfo
          workstep={craftDetail.work_step}
          classDate={craftDetail.reservation_date}
        />

        {/* <button className='block border rounded-lg border-grey200 text-grey700 py-[6px] pl-2 pr-3'>
        초벌
      </button> */}
        <Textarea
          readonly={true}
          classNames='block w-full mt-4 mb-8 h-[120px]'
          value={craftDetail.content}
        />
      </div>
    </div>
  );
};

export default CraftItemDetailContent;
