import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-failure',
  templateUrl: './it-payment-failure.page.component.html',
  styleUrls: ['./it-payment-failure.page.component.scss'],
})
export class PaymentFailureComponent implements OnInit {
  docid;
  paymentId;

  constructor(public route: ActivatedRoute, public router: Router) {}

  ngOnInit() {}
}
