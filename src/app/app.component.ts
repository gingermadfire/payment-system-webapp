import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CreationModalComponent} from "./creation-modal/creation-modal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bill Payment System';

  constructor(private ngbModal: NgbModal) {
  }

  open() {
    this.ngbModal.open(CreationModalComponent);
  }
}
