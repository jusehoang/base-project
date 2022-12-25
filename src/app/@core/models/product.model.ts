export interface Product {
  id: string;
  name?: string;
  description?: string;
  price?: number;
  image?: string;
  isSale?: boolean;
  priceSale?: number;
  percentSale?: number;
  sellNumber?: number;
  createdDate?: Date;
  code?: string;
  brand?: Brand;
  categorys?: Category[];
}

export interface Brand {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
  routerLink?: string;
}
