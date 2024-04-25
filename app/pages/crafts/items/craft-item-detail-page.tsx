'use client';

import ModalMenu from '@/app/shared/atoms/ModalMenu';
import Thumbnail from '@/app/shared/atoms/Thumbnail';
import LikeButton from '@/app/shared/atoms/like-button';
import Textarea from '@/app/shared/atoms/textarea';
import Header from '@/app/shared/modules/header';
import Image from 'next/image';

const CraftItemDetailPage = () => {
  return (
    <div>
      <Header>
        <Header.Back />
        <Header.MeatBall>
          <ModalMenu iconUrl='/icon/ic-edit_24px.svg' onClick={() => {}}>
            편집하기
          </ModalMenu>
          <ModalMenu
            type='secondary'
            iconUrl='/icon/ic-delete_24px.svg'
            onClick={() => {}}
          >
            삭제하기
          </ModalMenu>
        </Header.MeatBall>
      </Header>
      <div>
        <Image
          src='/mock/craft-item-detail-mock.png'
          alt='craft-item-detail-mock'
          width={375}
          height={480}
          className='w-full'
        />
        <div className='px-4'>
          <div className='w-full flex gap-2 items-center mt-6 mb-4'>
            <Thumbnail id={1} className='w-10 h-10' />
            <div className='flex flex-wrap w-full gap-1'>
              <p className='w-full text-base text-grey900'>최지영</p>
              <p className='w-full text-xs text-grey400'>2024-02-24 13:03</p>
            </div>
          </div>
          <button className='block border rounded-lg border-grey200 text-grey700 py-[6px] pl-2 pr-3'>
            초벌
          </button>
          <Textarea
            classNames='block w-full mt-2 mb-8 h-[120px]'
            value='건강과 지속 가능성을 추구하는 이들을 위해, 맛과 영양이 가득한 채식
            요리 레시피를 소개합니다. 이 글에서는 간단하지만 맛있는 채식 요리
            10가지를 선보입니다. 첫 번째 레시피는 아보카도 토스트, 아침 식사로
            완벽하며 영양소가 풍부합니다.'
          />
        </div>
      </div>
      <div className='py-6 px-4'>
        <p className='text-grey900 text-sm font-semibold mb-4'>댓글 2</p>

        <ul className='w-full flex flex-wrap gap-6'>
          <li className='flex gap-2 items-start'>
            <Thumbnail id={1} />
            <div className='w-full flex flex-wrap gap-1'>
              <p className='flex'>
                <span className='mr-2 text-grey900 text-xs font-bold'>
                  한선민
                </span>
                <span className='text-grey400 text-xs'>2024.11.30</span>
                <span className='ml-1 text-grey400 text-xs'>03:30</span>
              </p>
              <p className='w-full flex gap-6'>
                <span className=' w-full flex flex-wrap gap-1'>
                  <span className='text-grey900 text-sm'>
                    디자인에 관심 있는 사람들끼리 모여 이런 유익한 정보를
                    공유하는 것이 정말 좋네요.
                  </span>
                  <span className='text-grey400 text-xs'>삭제하기 </span>
                </span>
                {/* TODO: like 컴포넌트 */}
                <span className='flex flex-wrap justify-center items-stretch'>
                  <LikeButton />
                  <span className='text-grey400 text-xs font-bold'>2</span>
                </span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CraftItemDetailPage;
