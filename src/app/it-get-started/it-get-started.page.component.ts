import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './it-get-started.page.component.html',
})
export class GetStartedPageComponent implements OnInit {
  public language: string;
  public title: string;

  constructor() {}

  ngOnInit() {}
}
