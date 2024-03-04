'use client';

import { updateTodo } from '../../../lib/action';
import CheckBox from '../atoms/CheckBox';
interface CheckListItem {
  id: number;
  text: string;
  isChecked: boolean;
}

const CheckListItem = ({ id, text, isChecked }: CheckListItem) => {
  const handleCheck = (id: number) => {
    updateTodo(id);
  };
  return (
    <li
      key={`${id}`}
      className='w-full bg-grey50 rounded-md px-3 py-4 flex items-center gap-4 cursor-pointer '
      onClick={() => handleCheck(id)}
    >
      <CheckBox isChecked={isChecked} onCheck={() => handleCheck(id)} />
      <label htmlFor='memo1' className='text-sm cursor-pointer '>
        {text}
      </label>
    </li>
  );
};

export default CheckListItem;
