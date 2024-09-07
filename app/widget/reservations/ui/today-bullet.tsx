interface TodayBulletProps {
  positionTop?: number;
}

export const TodayBullet = ({ positionTop = 0 }: TodayBulletProps) => {
  return (
    <span
      className={`absolute  w-1 h-1 mt-2 bg-brown rounded-full`}
      style={{ top: positionTop }}
    ></span>
  );
};
