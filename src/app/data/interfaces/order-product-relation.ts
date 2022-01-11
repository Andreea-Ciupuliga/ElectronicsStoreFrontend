import {Order} from "./order";
import {Product} from "./product";

export interface OrderProductRelation {
  id:string;
  dateCreated: Date;
  dateModified: Date;
  orderId:string;
  order:Order;
  productId:string;
  product:Product;
}
