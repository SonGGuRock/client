import Thumbnail from '@/app/shared/atoms/Thumbnail';
import LikeButton from '@/app/shared/atoms/like-button';
import { ClassNamesProps } from '../../widget/reservations/ui/class-time-picker';

const Comments = ({ classNames }: ClassNamesProps) => {
  return (
    <div className={`${classNames}`}>
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
                  디자인에 관심 있는 사람들끼리 모여 이런 유익한 정보를 공유하는
                  것이 정말 좋네요.
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
  );
};

export default Comments;
