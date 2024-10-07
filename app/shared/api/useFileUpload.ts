import { useMutation } from '@tanstack/react-query';
import { postFileAsync } from './fetch';
import { ImageResponse } from './type';

const useFileUpload = () => {
  return useMutation<ImageResponse, unknown, FormData>({
    mutationFn: (body: FormData) => postFileAsync('files/images', body),
    onSuccess(data) {
      console.log('Network Request Success:', data);
    },
    onError(err) {
      console.error('Network Request Fail:', err);
    },
  });
};

export default useFileUpload;
