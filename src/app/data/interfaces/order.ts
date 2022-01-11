import {User} from "./user";
import {DeliveryAddress} from "./delivery-address";
import {OrderProductRelation} from "./order-product-relation";

export interface Order {
  id:string;
  dateCreated: Date;
  dateModified: Date;
  totalPrice:number;
  user:User;
  userId: string;
  deliveryAddress: DeliveryAddress;
  orderProductRelation:OrderProductRelation[];
}
