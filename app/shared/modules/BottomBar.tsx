import Image from 'next/image';

type menu =
  | {
      en: 'home';
      kr: '홈';
    }
  | {
      en: 'member';
      kr: '수강생';
    }
  | {
      en: 'calendar';
      kr: '달력';
    }
  | {
      en: 'gallery';
      kr: '갤러리';
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
    en: 'member',
    kr: '수강생',
  },
  {
    en: 'calendar',
    kr: '달력',
  },
  {
    en: 'gallery',
    kr: '갤러리',
  },
  {
    en: 'mypage',
    kr: '마이',
  },
];
const BottomBar = () => {
  return (
    <div className='w-full h-14 fixed bottom-0 left-0 z-50'>
      <ul className='flex w-[375px] mx-auto h-full'>
        {menus.map((menu) => (
          <li className='w-full bg-white flex flex-wrap justify-center items-center flex-col'>
            <Image
              src={`/icon/bottombar/${menu.en}_normal_24px.svg`}
              alt={menu.kr}
              width={24}
              height={24}
            />
            <span className='w-full text-center text-xs text-grey300'>
              {menu.kr}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomBar;
