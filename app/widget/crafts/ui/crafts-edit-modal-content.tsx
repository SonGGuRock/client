import Title from '@/app/shared/atoms/Title';
import { useState } from 'react';

type Status = {
  id: number;
  status: '진행중' | '완성' | '보관';
};

const STATUS: Status[] = [
  {
    id: 0,
    status: '진행중',
  },
  {
    id: 1,
    status: '완성',
  },
  {
    id: 2,
    status: '보관',
  },
];

const CraftsEditModalContent = () => {
  const [activeStatus, setActiveStatus] = useState<Status>();

  const handleClickStatus = (status: Status) => {
    setActiveStatus(status);
  };

  return (
    <div className='py-4'>
      <Title>작품 이동</Title>
      <div className='flex gap-2 mt-4 mb-4'>
        {STATUS.map((item, idx) => (
          <button
            key={item.id}
            className={` w-full text-center font-bold text-xs py-[10px] px-9 rounded-lg ${
              activeStatus?.id === item.id
                ? 'bg-brown text-white'
                : ' border border-grey150 text-grey600'
            }`}
            onClick={() =>
              handleClickStatus({ id: item.id, status: item.status })
            }
          >
            {item.status}
          </button>
        ))}
      </div>
      {activeStatus?.status === '진행중' && (
        <div className='w-full flex gap-2'>
          <span className=' border border-grey150 text-grey600 text-xs py-[6px] px-3 rounded-lg'>
            초벌
          </span>
          <span className=' border border-grey150 text-grey600 text-xs py-[6px] px-3 rounded-lg'>
            초벌
          </span>
        </div>
      )}
    </div>
  );
};

export default CraftsEditModalContent;
