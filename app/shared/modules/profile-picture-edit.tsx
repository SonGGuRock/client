import Image from 'next/image';

interface ProfilePictureEditProps {
  id: number;
  name: string;
  imageUrl?: string;
}

const ProfilePictureEdit = ({
  id,
  name,
  imageUrl,
}: ProfilePictureEditProps) => {
  return (
    <div className='relative'>
      <Image
        src={`${imageUrl ?? '/img/student_default.png'}`}
        alt=' 사진'
        width={88}
        height={88}
        className='rounded-full'
      />
      <Image
        src='/icon/ic-camera-circle-28px.svg'
        alt='사진 수정 버튼'
        width={28}
        height={28}
        className='absolute bottom-0 right-0'
      />
    </div>
  );
};

export default ProfilePictureEdit;
