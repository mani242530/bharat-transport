import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-splash',
  templateUrl: './it-splash.page.component.html',
})
export class SplashPageComponent implements OnInit {
  public language: string;
  public title: string;

  constructor(private router: Router) {}

  ngOnInit() {
    // this.initTranslate();
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    // this._translate.setDefaultLang('hi');
    // if (this._translate.getBrowserLang() !== undefined) {
    //   this._translate.use(this._translate.getBrowserLang());
    // } else {
    //   this._translate.use("hi"); // Set your language here
    // }
  }
}
