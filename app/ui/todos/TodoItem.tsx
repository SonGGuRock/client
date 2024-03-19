'use client';

import { Todo } from '@/app/lib/definition';
import { updateTodo } from '../../lib/action';
import CheckBox from '../components/atoms/CheckBox';
import Image from 'next/image';
import Thumbnail from '../components/atoms/Thumbnail';
import MeatBall from '../components/atoms/MeatBall';
import usePopup from '@/app/hooks/usePopup';
import useEditor from '@/app/hooks/useEditor';
import { createPortal } from 'react-dom';
import BottomSheet from '../components/atoms/BottomSheet';
import BottomSheetMenu from '../components/atoms/BottomSheetMenu';
import BottomSheetWithInput from '../components/modules/BottomSheetWithInput';
import Toast from '../components/atoms/Toast';
import useToast from '@/app/hooks/useToast';

const TodoItem = ({ id, content, is_completed, author }: Todo) => {
  const { open: isSelectMode, toggle: toggleSelectMode } = usePopup();
  const { edit, update: updateEditor, toggle: toggleEditor } = useEditor();
  const { toast, toggleToast } = useToast();

  const handleCheck = (id: number) => {
    // updateTodo(id);
  };
  return (
    <li
      key={`${id}`}
      className='w-full bg-grey50 rounded-md px-3 py-4 flex items-center gap-4 cursor-pointer '
      onClick={() => handleCheck(id)}
    >
      <CheckBox isChecked={is_completed} onCheck={() => handleCheck(id)} />
      <label
        htmlFor='memo1'
        className={`w-full text-sm cursor-pointer flex items-center justify-between  ${
          is_completed && 'text-grey500'
        }`}
      >
        {content}
        <span>
          {/* author.id === userId -> meatball menu*/}
          <MeatBall onClick={toggleSelectMode} />
          {/* <Thumbnail userId={author.id} /> */}
        </span>
      </label>
      {isSelectMode &&
        createPortal(
          <BottomSheet
            toggle={toggleSelectMode}
            className='flex flex-wrap gap-4'
          >
            <BottomSheetMenu
              key='bsm-1'
              text='수정하기'
              iconUrl='/icon/ic-edit_24px.svg'
              onClick={() => {
                toggleSelectMode();
                updateEditor({ id, content });
              }}
            />
            <BottomSheetMenu
              key='bsm-2'
              text='삭제하기'
              iconUrl='/icon/ic-delete_24px.svg'
              type='secondary'
              onClick={() => {
                toggleSelectMode();
                toggleToast({ text: '할 일을 삭제하였습니다.' });
              }}
            />
          </BottomSheet>,
          document.body
        )}
      {!!edit &&
        createPortal(
          <BottomSheetWithInput
            title='할 일 수정'
            placeholder={edit.content}
            onDone={() => {
              // TODO: updateTodo
              toggleEditor();
              toggleToast({ text: '할 일을 수정하였습니다' });
            }}
            onClose={toggleEditor}
          />,
          document.body
        )}
      {toast && createPortal(<Toast text={toast.text} />, document.body)}
    </li>
  );
};

export default TodoItem;
