import Image from 'next/image';

const ProfileDefault = () => {
  return (
    <Image
      src='/img/profile_default.png'
      alt='수강생 등록 기본'
      width={88}
      height={88}
    />
  );
};

export default ProfileDefault;
