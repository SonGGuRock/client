import { useMutation } from '@tanstack/react-query';
import { JusoRequestParams, JusoResponse } from './type';
import axios, { AxiosResponse } from 'axios';

const JUSO_URL = 'https://business.juso.go.kr/addrlink/addrLinkApi.do';
const JUSO_API_KEY = 'devU01TX0FVVEgyMDI0MDUxNjA5MDg1MzExNDc2OTQ=';

const useSearchAddress = () => {
  return useMutation<AxiosResponse<JusoResponse>, unknown, JusoRequestParams>({
    mutationFn: ({ keyword, currentPage = 1, countPerPage = 5 }) =>
      axios.get(JUSO_URL, {
        params: {
          confmKey: JUSO_API_KEY,
          currentPage,
          countPerPage,
          keyword,
          resultType: 'json',
        },
      }),
  });
};

export default useSearchAddress;
