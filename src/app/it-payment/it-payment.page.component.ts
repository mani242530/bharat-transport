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
  paymentAmount: number = 100;
  currency: string = 'INR';
  currencyIcon: string = '$';
  razor_key = 'rzp_test_0Pzav9uuhHbTsd,Qj9LUgkFApQzr1zM9YJ3eoOR';
  cardDetails: any = {};

  userFirmActivity: string;

  constructor(private router: Router, private appService: AppService) {}

  ngOnInit() {
    // this.appService.otpVerifiedToast();
    this.userFirmActivity = this.appService.userSelectedFirmActivity
    console.log(this.userFirmActivity)
  }

  payWithRazorpay() {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR', // your 3 letter currency code
      key: this.razor_key, // your Key Id from Razorpay dashboard
      amount: this.paymentAmount, // Payment amount in smallest denomiation e.g. cents for USD
      name: 'IndianTransport pay',
      prefill: {
        email: 'mabblesoft@gmail.com',
        contact: '9944634307',
        name: 'MabbleSoft',
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
      // this.router.navigate(['/select-vehicle']);
    };

    var cancelCallback = function (error) {
      alert(error.description + ' (Error ' + error.code + ')');
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }
}
