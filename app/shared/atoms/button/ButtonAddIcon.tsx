import Image from 'next/image';

const ButtonAddIcon = () => {
  return (
    <Image
      src='/icon/ic_plus_white.svg'
      alt='추가 버튼'
      width={18}
      height={18}
    />
  );
};
export default ButtonAddIcon;
