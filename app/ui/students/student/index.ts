import Thumbnail from '../../../shared/ui/atoms/Thumbnail';
import LastPaymentDate from './LastPaymentDate';
import Name from './Name';
import StudentLayout from './StudentLayout';
import RemainingClassCount from './RemainingClassCount';

export const StudentMain = Object.assign(StudentLayout, {
  Thumbnail,
  Name,
  LastPaymentDate,
  RemainingClassCount,
});
