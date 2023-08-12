import { Product } from "./product.model";

export interface Item extends Product {
  quantity?: number;
  total?: number;
}
export interface Cart {
  id?: string;
  items?: Item[];
  quantity?: number;
  total?: number;
}
