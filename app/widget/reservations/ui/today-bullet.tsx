interface TodayBulletProps {
  positionTop?: number;
}

export const TodayBullet = ({ positionTop = 0 }: TodayBulletProps) => {
  return (
    <span
      className={`absolute top-[${positionTop}px] w-1 h-1 bg-brown rounded-full`}
    ></span>
  );
};
