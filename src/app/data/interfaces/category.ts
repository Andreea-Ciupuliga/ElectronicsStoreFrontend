import {Product} from "./product";

export interface Category {
  id:string;
  dateCreated: Date;
  dateModified: Date;
  name:string;
  products: Product[];
}
