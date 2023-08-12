export interface BaseResponse<T> {
  items: T[];
  total: number;
  size: number;
}
