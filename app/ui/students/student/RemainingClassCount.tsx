import { PropsWithChildren, ReactNode } from 'react';
import Label from '../../../shared/ui/atoms/Label';

type RemainingClassCountType = (props: PropsWithChildren) => ReactNode;

const RemainingClassCount: RemainingClassCountType = ({
  children,
}: PropsWithChildren) => {
  return <Label text={`${children}회`} subtext='남음' />;
};

export default RemainingClassCount;

export type { RemainingClassCountType };
