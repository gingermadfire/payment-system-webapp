import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NgbActiveModal, NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";
import {CustomerService} from "../customer.service";
import {Customer} from "../customer";
import {CommonModule} from "@angular/common";
import {BillerService} from "../biller.service";
import {Biller} from "../biller";
import {PaymentService} from "../payment.service";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {Payment} from "../payment";

@Component({
  selector: 'app-creation-modal',
  standalone: true,
  templateUrl: './creation-modal.component.html',
  styleUrls: ['./creation-modal.component.css'],
  imports: [NgbDatepickerModule, CommonModule, FormsModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreationModalComponent implements OnInit {
  customers: Customer[] = [];
  billers: Biller[] = [];

  paymentForm = new FormGroup({
    customerId: new FormControl(),
    billerId: new FormControl(),
    account: new FormControl(),
    amount: new FormControl()
  });

  /*= this.formBuilder.group({
    customerId: ['Customer'],
    billerId: ['Biller'],
    account: [''],
    amount: [''],
  });*/

  constructor(public ngbActiveModal: NgbActiveModal, public customerService: CustomerService,
              public billerService: BillerService, private paymentService: PaymentService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getCustomers().subscribe(customers => {
      this.customers = customers;
      this.getBillers().subscribe(billers => {
        this.billers = billers;
        this.paymentForm = this.formBuilder.group({
          customerId: [customers.map(customer => customer.firstName + ' ' + customer.lastName), [Validators.required]],
          billerId: [billers.map(biller => biller.companyName), [Validators.required]],
          account: ['', [Validators.required]],
          amount: ['', [Validators.required]],
        });
      });
    });
  }

  getCustomers(): Observable<Customer[]> {
    return this.customerService.getCustomers();
  }

  getBillers(): Observable<Biller[]> {
    return this.billerService.getBillers();
  }

  savePayment() {
    console.log(this.paymentForm)
    const payment = {
      customerId: this.paymentForm.value.customerId,
      billerId: this.paymentForm.value.billerId,
      account: this.paymentForm.value.account,
      amount: this.paymentForm.value.amount
    } as Payment;
    this.paymentService.setPayment(payment);
  }
}
