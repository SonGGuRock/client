export type ResponseResult = '0' | '1' | '-1';

export type NoDataResponse = {
  result: ResponseResult;
  data: {};
};

export type DataResponse<T> = {
  result: ResponseResult;
  data: T;
};
