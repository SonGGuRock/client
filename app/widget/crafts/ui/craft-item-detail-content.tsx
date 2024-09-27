'use client';

import Image from 'next/image';
import CraftItemAuthor from './craft-item-detail-author';
import CraftItemInfo from './craft-item-info';
import Textarea from '@/app/shared/atoms/textarea';
import { useParams } from 'next/navigation';
import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import { CraftItemDetail } from '@/app/entities/crafts/types';
import Loader from '@/app/shared/atoms/loader';

const CraftItemDetailContent = () => {
  const params = useParams();
  const craftId = params['id'];
  const itemId = params['itemId'] as string;
  const { data: craftDetail } = useQueryWithCredentials<CraftItemDetail>(
    `/crafts/items/${itemId}`
  );
  if (!craftDetail) return <Loader />;
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
