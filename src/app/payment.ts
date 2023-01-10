import {Customer} from "./customer";
import {Biller} from "./biller";

export interface Payment {
  id: number;
  customer: Customer;
  customerId: number;
  biller: Biller;
  billerId: number;
  account: string;
  amount: number;
  dateTime: number;
}
