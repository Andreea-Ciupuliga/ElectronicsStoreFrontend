import {Role} from "./role";
import {Order} from "./order";

export interface User {

  id:string;
  dateCreated: Date;
  dateModified: Date;
  passwordHash: string;
  firstName : string;
  lastName: string;
  email: string;
  username:string;
  orders: Order[];
  role:Role;

}
