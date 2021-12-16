import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Company } from '../models/contact';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-listing',
  templateUrl: './it-listing-detail.page.component.html',
  styleUrls: ['./it-listing-detail.page.component.scss'],
})
export class ListingDetailPageComponent implements OnInit {
  id: number;
  company;
  sub1: Subscription;
  paramId: string;
  serviceProviding: string;
  isLoading = true;

  userData;
  user;
  userName;

  constructor(
    private activatedRoute: ActivatedRoute,
    private toastservice: ToastService,
    public ngroute: Router,
    private fbstore: AngularFirestore
  ) {
    this.paramId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getProduct(this.paramId);
  }

  async getProduct(docid: string) {
    try {
      await this.fbstore
        .doc('companys/' + docid)
        .valueChanges()
        .subscribe((result) => {
          this.isLoading = false;
          if (!result) {
            this.ngroute.navigate(['/listing']);
          } else {
            this.serviceProviding = result['serviceProviding']
              .toString()
              .split(',')
              .join('\n');
            this.company = result;
          }
        });
    } catch (error) {
      this.toastservice.showToast(error.message, 2000);
      console.log(error.message);
    }
  }

  ngOnDestroy() {}
}
