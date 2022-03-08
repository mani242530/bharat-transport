import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './it-splash.page.component.html',
})
export class SplashPageComponent implements OnInit {
  public language: string;
  public title: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  initTranslate() {}
}
