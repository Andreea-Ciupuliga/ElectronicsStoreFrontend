import {Order} from "./order";

export interface DeliveryAddress {
  id:string;
  dateCreated: Date;
  dateModified: Date;
  city:string;
  street:string
  number:string;
  zipCode:string;
  order:Order;
  orderId:string;
}
