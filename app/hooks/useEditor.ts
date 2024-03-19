import { useState } from 'react';

type Editor = {
  id: number;
  content: string;
};

const useEditor = () => {
  const [edit, setEdit] = useState<Editor | null>();

  const update = ({ id, content }: { id: number; content: string }) => {
    setEdit({ id, content });
  };

  const toggle = () => {
    setEdit(null);
  };

  return { edit, update, toggle };
};

export default useEditor;
