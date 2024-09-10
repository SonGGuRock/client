import useFormFill from '@/app/shared/modules/stepper/lib/use-form-fill';
import CraftCreateDetail from './craft-create-detail';
import { CraftItemCreateContext } from '@/app/_provider/craft-item-create-provider';
import CraftItemCreateDetail from './craft-item-create-detail';

const CraftItemEditDetail = () => {
  const { fill: fillCraftItemCreateBody } = useFormFill(CraftItemCreateContext);

  return <CraftItemCreateDetail />;
};

export default CraftItemEditDetail;
