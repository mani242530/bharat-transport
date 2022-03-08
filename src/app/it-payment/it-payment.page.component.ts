import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AppService } from '../services/app.servcie';
import { ToastService } from '../services/toast.service';
declare var RazorpayCheckout: any;
@Component({
  selector: 'app-payment',
  templateUrl: './it-payment.page.component.html',
  styleUrls: ['./it-payment.page.component.scss'],
})
export class PaymentPageComponent implements OnInit {
  paymentAmount: number = 100.0;
  currency: string = 'INR';
  currencyIcon: string = '₹';
  razor_key = 'rzp_live_hP98k48bLAaoBC';
  cardDetails: any = {};
  docId;

  userFirmActivity: string;

  constructor(
    private router: Router,
    private appService: AppService,
    private fbstore: AngularFirestore,
    private toastservice: ToastService
  ) {
    this.docId = this.appService.docId;
  }

  ngOnInit() {
    // this.appService.otpVerifiedToast();
    this.userFirmActivity = this.appService.userSelectedFirmActivity;
  }

  payWithRazorpay() {
    var options = {
      description: 'Credit towards Service',
      image: 'https://mabblesoft.com/works/bharat-transport/app_logo.png',
      currency: 'INR', // your 3 letter currency code
      key: this.razor_key, // your Key Id from Razorpay dashboard
      amount: this.paymentAmount, // Payment amount in smallest denomiation e.g. cents for USD
      name: 'Bharat Transport App',
      options: {
        checkout: {
          method: {
            netbanking: 1,
            card: 1,
            upi: 1,
            wallet: 0,
          },
        },
      },
      prefill: {
        email: 'info@privid.co.in',
        contact: '+91 9081486846',
        name: 'Bharat Transport App',
      },
      theme: {
        color: '#5f259f',
      },
      modal: {
        ondismiss: function () {
          alert('dismissed');
        },
      },
    };

    var successCallback = (payment_id) => {
      // <- Here!
      alert('payment_id: ' + payment_id);
      // if (payment_id) {
      let paymentobj = {
        paymentStatus: 'Paid',
        accountStatus: 'Active',
      };
      this.fbstore
        .doc('companys/' + this.docId)
        .update(paymentobj)
        .then(() => {
          this.toastservice.showToast('Payment Done Successfully', 1000);
          this.router.navigate(['/select-vehicle']);
        });
      // }
    };

    var cancelCallback = (error) => {
      // <- Here!
      alert(error.description + ' (Error ' + error.code + ')');
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }
}
