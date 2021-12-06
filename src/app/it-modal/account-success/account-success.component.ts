import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController, NavController } from "@ionic/angular";

@Component({
  selector: "it-account-success-modal",
  templateUrl: "account-success.component.html",
  styleUrls: ["account-success.component.scss"],
})
export class AccountSuccessModalComponent {
  constructor(
    public navCtrl: NavController,
    public modalController: ModalController,
    private router: Router
  ) {}

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true,
    });

    this.router.navigate(["/verification"]);
  }
}
