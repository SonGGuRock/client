import Link from 'next/link';
import Label from '../atoms/Label';
import Thumbnail from '../atoms/Thumbnail';

export type UserItemProps = {
  userId: number;
  userName: string;
  lastPaymentDate: string;
  remainingCount: number;
};

const UserItem = ({
  userId,
  userName,
  lastPaymentDate,
  remainingCount,
}: UserItemProps) => {
  return (
    <li className='w-full p-3 h-16 bg-grey50 rounded-lg'>
      <Link
        className=' flex justify-between items-center'
        href={`/students/${userId}`}
      >
        <div className='flex gap-2 items-center'>
          <Thumbnail userId={userId} userName={userName} />
          <div>
            <p className='text-sm'>{userName}</p>
            <p className='text-xs text-grey500'>
              지난 결제일
              <strong className='text-grey600'>{lastPaymentDate}</strong>
            </p>
          </div>
        </div>
        <Label text={`${remainingCount}회`} subtext='남음' />
      </Link>
    </li>
  );
};

export default UserItem;
