export interface Payment {
  id: number;
  customerId: number;
  billerId: number;
  account: string;
  amount: number;
}
