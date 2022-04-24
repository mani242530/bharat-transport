import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AppService } from '../services/app.servcie';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './it-payment-success.page.component.html',
  styleUrls: ['./it-payment-success.page.component.scss'],
})
export class PaymentSuccessComponent implements OnInit {
  docid;
  paymentId;

  constructor(
    private fbstore: AngularFirestore,
    private appService: AppService,
    public route: ActivatedRoute,
    public router: Router,
    private toastservice: ToastService
  ) {
    this.docid = this.appService.docId;
    this.paymentId = this.route.snapshot.paramMap.get('paymentid');
  }

  ngOnInit() {
    if (this.paymentId) {
      this.doModify();
    }
  }

  doModify() {
    let paymentobj = {
      paymentStatus: 'Paid',
      accountStatus: 'Active',
      payment_id: this.paymentId,
      payment_date: new Date(),
    };
    try {
      this.fbstore
        .doc('companys/' + this.docid)
        .ref.update(paymentobj)
        .then((data) => {
          console.log(data);
        });
    } catch (error) {
      this.toastservice.showToast(error.message, 15000);
    }
  }
}
