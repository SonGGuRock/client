import IconPlusCircleGray from '@/app/shared/atoms/icons/icon-plus-circle_gray';
import Title from '@/app/shared/atoms/Title';
import useModal from '@/app/shared/modules/modal/lib/useModal';
import ModalContentWithInput from '@/app/shared/modules/modal/ui/ModalContentWithInput';
import PortalModal from '@/app/shared/modules/modal/ui/PotalModal';
import CraftItem from './craft-item';
import { Craft } from '../api/type';
import useCreate from '@/app/shared/api/useCreate';
import { CraftCreateBody } from '@/app/entities/crafts/types';
import useFormFill from '@/app/shared/modules/stepper/lib/use-form-fill';
import { CraftCreateContext } from '@/app/_provider/craft-create-provide';

const craft_list: Craft[] = [
  {
    craft_id: '1',
    name: '작품명',
    updated_at: '2024-01-24',
    now_work_step: '삼벌',
    thumbnail: '',
    item_count: 1,
  },
  {
    craft_id: '1',
    name: '작품명',
    updated_at: '2024-01-24',
    now_work_step: '삼벌',
    thumbnail: '',
    item_count: 1,
  },
];

const CraftCreateDetail = () => {
  const { form } = useFormFill(CraftCreateContext);
  const { openModal, closeModal } = useModal();
  const { post } = useCreate<CraftCreateBody>({
    path: `crafts`,
    revalidate: false,
    onSuccess: () => {
      closeModal();
    },
  });
  const handleOpenModalCreateCraft = () => {
    openModal(
      <ModalContentWithInput
        title='작품 폴더 생성'
        placeholder='작품 이름을 입력하세요'
        onClose={closeModal}
        onDone={(content) => {
          post({ student_id: form.student_id as number, name: content });
        }}
      />
    );
  };

  return (
    <div>
      <Title size='large'>작품 폴더를 선택해주세요</Title>
      <div className='grid grid-cols-3 gap-2'>
        <div
          onClick={handleOpenModalCreateCraft}
          className='my-4 bg-grey50 rounded-lg w-full h-[108px] flex justify-center items-center'
        >
          <IconPlusCircleGray />
        </div>
        {craft_list.map((craft) => (
          <CraftItem
            key={craft.craft_id}
            craftId={craft.craft_id}
            onClick={() => {}}
          />
        ))}
      </div>

      <PortalModal />
    </div>
  );
};

export default CraftCreateDetail;
