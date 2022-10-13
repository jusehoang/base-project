export interface Product {
  id: string;
  name: string;
  description?: string;
  cost: number;
  image?: string;
  isSale: boolean;
  costSale?: number;
  percentSale?: number;
  sellNumber: number;
  createdDate: Date;
}
