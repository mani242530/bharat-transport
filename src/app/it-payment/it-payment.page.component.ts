import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../services/app.servcie';
declare var RazorpayCheckout: any;
@Component({
  selector: 'app-payment',
  templateUrl: './it-payment.page.component.html',
  styleUrls: ['./it-payment.page.component.scss'],
})
export class PaymentPageComponent implements OnInit {
  constructor(private router: Router, private appService: AppService) {}

  ngOnInit() {
    this.appService.otpVerifiedToast();
  }

  payWithRazorpay() {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR', // your 3 letter currency code
      key: 'rzp_test_4VXE7p6AKT8az8,X2218z4UrTzRGmQhNlSrmKRK', // your Key Id from Razorpay dashboard
      amount: 100, // Payment amount in smallest denomiation e.g. cents for USD
      name: 'Razorpay',
      prefill: {
        email: 'mabblesoft@gmail.com',
        contact: '9944634307',
        name: 'Razorpay',
      },
      theme: {
        color: '#F37254',
      },
      modal: {
        ondismiss: function () {
          alert('dismissed');
        },
      },
    };

    var successCallback = function (payment_id) {
      alert('payment_id: ' + payment_id);
      this.router.navigate(['/select-vehicle']);
    };

    var cancelCallback = function (error) {
      alert(error.description + ' (Error ' + error.code + ')');
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }
}
