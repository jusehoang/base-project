import {Brand} from "./brand.model";

export interface Product {
  id: string;
  name?: string;
  description?: string;
  price?: number;
  image?: string;
  isSale?: boolean;
  priceSale?: number;
  discountPercentage?: number;
  sellNumber?: number;
  createdDate?: Date;
  code?: string;
  brand?: Brand;
  categorys?: Category[];
  keywords?: string[];
  stock?: number;
}

export interface Category {
  id: string;
  name: string;
  routerLink?: string;
}
