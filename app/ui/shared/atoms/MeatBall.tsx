import Image from 'next/image';

type MeatBallProps = { onClick: () => void };

const MeatBall = ({ onClick }: MeatBallProps) => {
  return (
    <div>
      <button onClick={onClick}>
        <Image
          src='/icon/ic-meatballs-24px.svg'
          alt='더보기 버튼'
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};

export default MeatBall;
