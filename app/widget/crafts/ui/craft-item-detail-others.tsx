import GoTo from '@/app/shared/atoms/GoTo';

import 'swiper/css';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CraftItemWorkstep from '@/app/widget/crafts/ui/craft-item-workstep';
import Image from 'next/image';
import IconPlusCircleGray from '@/app/shared/atoms/icons/icon-plus-circle_gray';
import { useParams, useRouter } from 'next/navigation';
import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import { CraftItemDetail } from '@/app/entities/crafts/types';

const CraftItemDetailOthers = () => {
  const params = useParams();
  const itemId = params.id as string;
  const router = useRouter();
  const { data: craftDetail } = useQueryWithCredentials<CraftItemDetail>(
    `/crafts/items/${itemId}`
  );

  const handleCreateItem = () => {
    //TODO: [id], [itemId] 로 nested
    router.push(`/crafts/2/create?name=${craftDetail?.craft_name}`);
  };
  if (!craftDetail) return <div>loading now</div>;
  return (
    <div className='px-4'>
      <div className='w-full relative mb-4'>
        <span className='text-base text-grey900 font-bold'>
          {craftDetail.craft_name}을 만들고 있어요!
        </span>
        <GoTo href='' title='전체보기' />
      </div>
      <Swiper
        modules={[FreeMode]}
        slidesPerView={3.8}
        spaceBetween={8}
        freeMode={true}
        className='h-[88px]'
      >
        <SwiperSlide onClick={handleCreateItem}>
          <li className='flex justify-center items-center rounded-lg bg-grey100 h-full'>
            <IconPlusCircleGray />
          </li>
        </SwiperSlide>
        {craftDetail.items.map((item) => (
          <SwiperSlide key={item.id}>
            <li className='w-[88px] h-[88px] relative'>
              <CraftItemWorkstep
                classNames='absolute left-0 top-0'
                workstep={item.work_step}
                style='black'
              />
              <Image
                className='rounded-lg object-cover w-[88px] h-[88px]'
                src={item.picture}
                alt='craft mock'
                width={88}
                height={88}
              />
            </li>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CraftItemDetailOthers;
