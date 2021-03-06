export interface ResponseOptionVo {
  paging: PagingVo;
}

interface ResponseErrorVo {
  errorMessage: string;
  errorCode: number;
}

export interface ResponseDataVo {
  returnCode: number;
  returnMessage: string;
  error: ResponseErrorVo;
  data: any;
  options: ResponseOptionVo;
}

export interface ResponseVo {
  status: number;
  data: ResponseDataVo;
  headers: any;
}

export interface ResponseAnyVo {
  status: number;
  data: any;
  headers: any;
}

export interface PagingVo {
  prev: number;
  pages: number[];
  next: number;
  last: number;
  totalCnt: number;
}
