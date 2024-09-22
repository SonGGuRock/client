import IconPlusCircleGray from '@/app/shared/atoms/icons/icon-plus-circle_gray';
import Title from '@/app/shared/atoms/Title';
import useModal from '@/app/shared/modules/modal/lib/useModal';
import ModalContentWithInput from '@/app/shared/modules/modal/ui/ModalContentWithInput';
import PortalModal from '@/app/shared/modules/modal/ui/PotalModal';
import CraftItem from './craft-item';
import useCreate from '@/app/shared/api/useCreate';
import { CraftCreateBody, CraftSummaries } from '@/app/entities/crafts/types';
import useFormFill from '@/app/shared/modules/stepper/lib/use-form-fill';
import { CraftCreateContext } from '@/app/_provider/craft-create-provide';
import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import { useQueryClient } from '@tanstack/react-query';
import { CraftItemMutateContext } from '@/app/_provider/craft-item-create-provider';

const CraftCreateDetail = () => {
  const query = useQueryClient();
  const { form: craftCreateBody, fill: fillCraftCreateBodyAndTitle } =
    useFormFill(CraftCreateContext);
  const { fill: fillCraftItemCreateBody } = useFormFill(CraftItemMutateContext);
  const { openModal, closeModal } = useModal();
  const { data } = useQueryWithCredentials<CraftSummaries>(
    `crafts/students/${craftCreateBody.student_id}`
  );
  const { post } = useCreate<CraftCreateBody>({
    path: `crafts`,
    revalidate: false,
    onSuccess: () => {
      closeModal();
      query.invalidateQueries({
        queryKey: [`crafts/students/${craftCreateBody.student_id}`],
      });
    },
  });
  const handleOpenModalCreateCraft = () => {
    openModal(
      <ModalContentWithInput
        title='작품 폴더 생성'
        placeholder='작품 이름을 입력하세요'
        onClose={closeModal}
        onDone={(content) => {
          post({
            student_id: craftCreateBody.student_id as number,
            name: content,
          });
        }}
      />
    );
  };

  const handleClickCraft = (craftId: number, _: number, craftName?: string) => {
    fillCraftCreateBodyAndTitle({ title: craftName });
    fillCraftItemCreateBody({ craft_id: craftId });
  };

  if (!data) return <div>loading now </div>;

  const { totalPages, crafts } = data;
  return (
    <div>
      <Title size='large'>작품 폴더를 선택해주세요</Title>
      <div className='grid grid-cols-3 gap-2 my-4'>
        <div
          onClick={handleOpenModalCreateCraft}
          className=' bg-grey50 rounded-lg w-full h-[108px] flex justify-center items-center'
        >
          <IconPlusCircleGray />
        </div>
        {crafts.map((craft) => (
          <CraftItem key={craft.id} craft={craft} onClick={handleClickCraft} />
        ))}
      </div>

      <PortalModal />
    </div>
  );
};

export default CraftCreateDetail;
