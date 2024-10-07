import { Children, PropsWithChildren, ReactNode, isValidElement } from 'react';
import RemainingClassCount from './RemainingClassCount';

const RemainingClassCountType = (<RemainingClassCount />).type;

function getRemainingClassCount(children: ReactNode) {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter(
      (child) => isValidElement(child) && child.type === RemainingClassCountType
    )
    .slice(0, 2);
}

function getStudentInfo(children: ReactNode) {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter(
      (child) => isValidElement(child) && child.type !== RemainingClassCountType
    )
    .slice(0, 2);
}

const StudentLayout = ({ children }: PropsWithChildren) => {
  const remainingClassCount = getRemainingClassCount(children);
  const studentInfo = getStudentInfo(children);

  return (
    <div className='w-full rounded-lg flex justify-between items-center'>
      <div className='w-full flex items-center gap-2 '>{studentInfo}</div>
      {remainingClassCount && <div>{remainingClassCount}</div>}
    </div>
  );
};

export default StudentLayout;
