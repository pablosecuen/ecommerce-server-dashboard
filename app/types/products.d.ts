import { PRICE } from "./price";

export interface PRODUCT {
  id: string
  type: string,
  name: string,
  price: PRICE,
  files: string[],
  size: string,
  color: string,
  description: string,
  gender: string,
  stock: number,
  inSale: boolean
  status: string,
}