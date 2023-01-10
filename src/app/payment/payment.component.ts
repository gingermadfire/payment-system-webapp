import {Component, OnInit} from '@angular/core';
import {Payment} from "../payment";
import {PaymentService} from "../payment.service";
import {CreationModalComponent} from "../creation-modal/creation-modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payments: Payment[] = [];

  constructor(private paymentService: PaymentService, private ngbModal: NgbModal) {
  }

  ngOnInit(): void {
    this.getPayments();
  }

  getPayments(): void {
    this.paymentService.getPayments()
      .subscribe(payments => this.payments = payments);
  }

  open() {
    this.ngbModal.open(CreationModalComponent);
  }
}
