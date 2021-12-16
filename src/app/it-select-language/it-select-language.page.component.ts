import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from '../services/app.servcie';

@Component({
  selector: 'app-select-language',
  templateUrl: './it-select-language.page.component.html',
  styleUrls: ['./it-select-language.page.component.scss'],
})
export class SelectLanguagePageComponent implements OnInit {
  languages = [
    {
      id: 'en',
      name: 'ENGLISH',
      description: 'ENGLISH',
    },
    {
      id: 'hi',
      name: 'हिंदी',
      description: 'HINDI',
    },
    {
      id: 'ma',
      name: 'मराठी',
      description: 'MARATHI',
    },
    {
      id: 'gu',
      name: 'ગુજરાતી',
      description: 'GUJARATI',
    },
    {
      id: 'tn',
      name: 'தமிழ்',
      description: 'TAMIL',
    },
    {
      id: 'tl',
      name: 'తెలుగు',
      description: 'TELUGU',
    },
    {
      id: 'ka',
      name: 'ಕೆನಡಾ',
      description: 'KANADA',
    },
    {
      id: 'ml',
      name: 'മലയാളം',
      description: 'MALAYALAM',
    },
  ];
  constructor(
    private translateService: TranslateService,
    public appservice: AppService,
    private router: Router
  ) {}

  ngOnInit() {}

  loadSelectedLanguage(language) {
    this.appservice.selectedLanguage = language;
    this.translateService.use(language);
    this.router.navigate(['/signup']);
  }
}
