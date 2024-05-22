export type ResponseResult = '0' | '1' | '-1';

export type NoDataResponse = {
  result: ResponseResult;
  data: {};
};

export type DataResponse<T> = {
  result: ResponseResult;
  data: T;
};

export type ImageResponse = DataResponse<{ file_name: string }>;

export type ErrorResponse = {
  result: '0';
  code: string;
  message: string;
};
