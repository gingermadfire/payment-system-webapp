import {Component, OnInit} from '@angular/core';
import {Biller} from "../biller";
import {BillerService} from "../biller.service";

@Component({
  selector: 'app-biller',
  templateUrl: './biller.component.html',
  styleUrls: ['./biller.component.css']
})
export class BillerComponent implements OnInit{
  billers : Biller[] = [];

  constructor(private billerService: BillerService) {}

  ngOnInit() {
    this.getBillers();
  }

  getBillers(): void {
    this.billerService.getBillers()
      .subscribe(billers => this.billers = billers);
  }
}
