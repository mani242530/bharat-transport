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
  docId;
  paymentId;

  constructor(
    private fbstore: AngularFirestore,
    private appService: AppService,
    public route: ActivatedRoute,
    public router: Router,
    private toastservice: ToastService,
  ) {
    this.docId = this.appService.docId;
    this.paymentId = this.route.snapshot.paramMap.get('paymentid');
  }

  ngOnInit() {
    console.log(this.paymentId, this.docId);
    if (this.paymentId) {
      this.doModify();
    }
  }

  async doModify() {
    let paymentobj = {
      paymentStatus: 'Paid',
      accountStatus: 'Active',
    };
    try {
      await this.fbstore
        .doc('companys/' + this.docId)
        .update(paymentobj)
        .then((data) => {
          console.log(data);
          this.router.navigate(['/select-vehicle']);
        });
    } catch (error) {
      this.toastservice.showToast(error.message, 2000);
      //console.log(error.message);
    }
  }
}
