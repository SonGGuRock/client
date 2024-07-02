import Image from 'next/image';
import Link from 'next/link';

type menu =
  | {
      en: 'home';
      kr: '홈';
    }
  | {
      en: 'students';
      kr: '수강생';
    }
  | {
      en: 'reservations';
      kr: '예약';
    }
  | {
      en: 'crafts';
      kr: '작품';
    }
  | {
      en: 'mypage';
      kr: '마이';
    };

const menus: menu[] = [
  {
    en: 'home',
    kr: '홈',
  },
  {
    en: 'students',
    kr: '수강생',
  },
  {
    en: 'reservations',
    kr: '예약',
  },
  {
    en: 'crafts',
    kr: '작품',
  },
  {
    en: 'mypage',
    kr: '마이',
  },
];
const BottomBar = () => {
  return (
    <div className='w-full h-14 fixed bottom-0 left-0 z-50'>
      <div className='flex w-[375px] mx-auto h-full'>
        {menus.map((menu, idx) => (
          <Link
            id={menu.en + idx}
            href={`/${menu.en}`}
            className='w-full bg-white flex flex-wrap justify-center items-center flex-col'
          >
            <Image
              src={`/icon/bottombar/${menu.en}_normal_24px.svg`}
              alt={menu.kr}
              width={24}
              height={24}
            />
            <span className='w-full text-center text-xs text-grey300'>
              {menu.kr}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomBar;
