import Image from 'next/image';
import CraftItemAuthor from './craft-item-detail-author';
import CraftItemInfo from './craft-item-info';
import Textarea from '@/app/shared/atoms/textarea';

const CraftItemDetailContent = () => {
  return (
    <div>
      <Image
        src='/mock/craft-item-detail-mock.png'
        alt='craft-item-detail-mock'
        width={375}
        height={480}
        className='w-full'
      />
      <div className='px-4'>
        <CraftItemAuthor />

        <CraftItemInfo workstep='초벌' classDate='2024. 01. 23' />

        {/* <button className='block border rounded-lg border-grey200 text-grey700 py-[6px] pl-2 pr-3'>
        초벌
      </button> */}
        <Textarea
          classNames='block w-full mt-4 mb-8 h-[120px]'
          value='건강과 지속 가능성을 추구하는 이들을 위해, 맛과 영양이 가득한 채식
        요리 레시피를 소개합니다. 이 글에서는 간단하지만 맛있는 채식 요리
        10가지를 선보입니다. 첫 번째 레시피는 아보카도 토스트, 아침 식사로
        완벽하며 영양소가 풍부합니다.'
        />
      </div>
    </div>
  );
};

export default CraftItemDetailContent;
