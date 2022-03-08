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
      img: 'english',
    },
    {
      id: 'hi',
      name: 'हिंदी',
      description: 'HINDI',
      img: 'hindi',
    },
    {
      id: 'ma',
      name: 'मराठी',
      description: 'MARATHI',
      img: 'marathi',
    },
    {
      id: 'gu',
      name: 'ગુજરાતી',
      description: 'GUJARATI',
      img: 'gujarati',
    },
    {
      id: 'tn',
      name: 'தமிழ்',
      description: 'TAMIL',
      img: 'tamil',
    },
    {
      id: 'tl',
      name: 'తెలుగు',
      description: 'TELUGU',
      img: 'telugu',
    },
    {
      id: 'ka',
      name: 'ಕೆನಡಾ',
      description: 'KANADA',
      img: 'kanada',
    },
    {
      id: 'ml',
      name: 'മലയാളം',
      description: 'MALAYALAM',
      img: 'malayalam',
    },
    {
      id: 'pn',
      name: 'ਪੰਜਾਬੀ',
      description: 'PUNJABI',
      img: 'punjabi',
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
