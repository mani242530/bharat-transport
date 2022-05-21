import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AppService } from '../services/app.servcie';
import { ToastService } from '../services/toast.service';

declare var RazorpayCheckout: any;

@Component({
  selector: 'app-payment',
  templateUrl: './it-payment.page.component.html',
  styleUrls: ['./it-payment.page.component.scss'],
})
export class PaymentPageComponent implements OnInit {
  paymentAmount: number;
  currency: string = 'INR';
  currencyIcon: string = '₹';
  razor_key = 'rzp_live_hP98k48bLAaoBC';
  cardDetails: any = {};
  docId;

  userFirmActivity: string;

  constructor(
    private router: Router,
    private appService: AppService,
    private toastController: ToastController,
    private toastservice: ToastService,
    private fbstore: AngularFirestore
  ) {
    this.docId = this.appService.docId;
  }

  ngOnInit() {
    this.userFirmActivity = this.appService.userSelectedFirmActivity;
    this.paymentAmount = this.userFirmActivity === 'Driver' ? 9900.0 : 99900.0;
    this.appService.paymentAmount = this.paymentAmount;
  }

  payWithRazorpay() {
    let options = {
      description: 'Credit towards Service',
      image: 'http://privid.net.in/app_logo.png',
      currency: 'INR', // your 3 letter currency code
      key: this.razor_key, // your Key Id from Razorpay dashboard
      amount: this.paymentAmount, // Payment amount in smallest denomiation e.g. cents for USD
      name: 'Bharat Transport App',
      config: {
        display: {
          blocks: {
            banks: {
              name: 'All payment methods',
              instruments: [
                {
                  method: 'upi',
                },
                {
                  method: 'card',
                },
                {
                  method: 'netbanking',
                },
              ],
            },
          },
          hide: [
            {
              method: 'emi',
            },
            {
              method: 'wallet',
            },
          ],
          sequence: ['block.banks'],
          preferences: {
            show_default_blocks: false,
          },
        },
      },
      prefill: {
        email: 'info@privid.co.in',
        contact: '+91 9081486846',
        name: '',
      },
      theme: {
        color: '#5f259f',
      },
      modal: {
        ondismiss: function () {
          if (confirm('Are you sure, you want to close the form?')) {
            let txt = 'You pressed OK!';
            console.log('Checkout form closed by the user');
          } else {
            let txt = 'You pressed Cancel!';
            console.log('Complete the Payment');
          }
        },
      },
    };

    let successCallback = (payment_id) => {
      console.log('PaymentId ' + payment_id);
      this.successPayment(payment_id);
    };

    let cancelCallback = (error) => {
      console.log(error.description + ' (Error ' + error.code + ')');
      this.router.navigate(['/payment-failure']);
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }

  successPayment(id) {
    if (id) {
      const paymentobj = {
        paymentStatus: 'Paid',
        accountStatus: 'Active',
        payment_id: id,
        payment_date: new Date().toISOString().slice(0, 10),
        paymentAmount: this.paymentAmount,
      };
      try {
        this.fbstore
          .doc('companys/' + this.docId)
          .ref.update(paymentobj)
          .then((data) => {
            console.log(data);
            // setTimeout(() => {
            this.router.navigate(['/payment-success', id]);
            // }, 5000);
          });
      } catch (error) {
        this.toastservice.showToast(error.message, 15000);
      }
    }
  }
}
