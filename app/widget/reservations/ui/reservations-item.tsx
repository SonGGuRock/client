import Image from 'next/image';
interface ReservationItemsProps {
  isFulfilled: boolean;
}
const ReservationItem = ({ isFulfilled }: ReservationItemsProps) => {
  return (
    <div
      className={`w-full p-3 ${
        isFulfilled ? 'bg-grey200' : 'bg-grey50'
      } rounded-lg flex gap-2 items-center justfiy-between`}
    >
      <div className='flex gap-2'>
        <Image
          src='/icon/ic-hand-circle-32px.svg'
          alt='핸드빌딩 아이콘'
          width={32}
          height={32}
        />
        <div className='flex flex-wrap gap-2'>
          <p
            className={`w-full text-sm ${
              isFulfilled ? 'text-white' : 'text-grey900'
            }`}
          >
            2월 23일 금요일
          </p>
          <p
            className={`w-full text-xs ${
              isFulfilled ? 'text-white' : 'text-grey400'
            }`}
          >
            오전 10:00 ~ 오후 12:00
          </p>
        </div>
      </div>
      <div className='flex gap-2'>
        <p
          className={`w-fit text-xs min-w-10 ${
            isFulfilled ? 'text-white' : 'text-grey500'
          }`}
        >
          4 / 4회
        </p>
        <Image
          src='/icon/ic-close-circle-18px.svg'
          alt='삭제 아이콘'
          width={18}
          height={18}
        />
      </div>
    </div>
  );
};

export default ReservationItem;
