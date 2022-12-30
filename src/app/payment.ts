import {Customer} from "./customer";
import {Biller} from "./biller";

export interface Payment {
  id: number;
  customer: Customer;
  biller: Biller;
  account: string;
  amount: number;
  dateTime: number;
}
