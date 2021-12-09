import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SmsRetriever } from '@ionic-native/sms-retriever/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-verification',
  templateUrl: './it-verification.page.component.html',
  styleUrls: ['./it-verification.page.component.scss'],
})
export class VerificationPageComponent implements OnInit {
  userData;

  OTP: string = '';
  showOTPInput: boolean = false;
  OTPmessage: string =
    'An OTP is sent to your number. You should receive it in 15 s';
  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private smsRetriever: SmsRetriever
  ) {
    this.smsRetriever
      .getAppHash()
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));
  }

  ngOnInit() {}

  async presentToast(message, position, duration) {
    const toast = await this.toastCtrl.create({
      message: message,
      position: position,
      duration: duration,
    });
    toast.present();
  }

  next() {
    this.showOTPInput = true;
    this.start();
  }

  start() {
    this.smsRetriever
      .startWatching()
      .then((res: any) => {
        console.log(res);
        this.processSMS(res);
      })
      .catch((error: any) => console.error(error));
  }

  processSMS(data) {
    // Design your SMS with App hash so the retriever API can read the SMS without READ_SMS permission
    // Attach the App hash to SMS from your server, Last 11 characters should be the App Hash
    // After that, format the SMS so you can recognize the OTP correctly
    // Here I put the first 6 character as OTP
    const message = data.Message;
    if (message != -1) {
      this.OTP = message.slice(0, 6);
      console.log(this.OTP);
      this.OTPmessage = 'OTP received. Proceed to register';
      this.presentToast('SMS received with correct app hash', 'bottom', 1500);
    }
  }

  register() {
    if (this.OTP != '') {
      this.presentToast('You are successfully registered', 'bottom', 1500);
      this.router.navigate(['/home']);
    } else {
      this.presentToast('Your OTP is not valid', 'bottom', 1500);
    }
  }
}
