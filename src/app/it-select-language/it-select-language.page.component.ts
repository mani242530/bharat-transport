import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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
      description: 'ENGLISH'
    },
    {
      id: 'hi',
      name: 'हिंदी',
      description: 'HINDI'
    },
    {
      id: 'ma',
      name: 'मराठी',
      description: 'MARATHI'
    },
    {
      id: 'gu',
      name: 'ગુજરાતી',
      description: 'GUJARATI'
    },
    {
      id: 'tn',
      name: 'தமிழ்',
      description: 'TAMIL'
    },
    {
      id: 'tl',
      name: 'తెలుగు',
      description: 'TELUGU'
    },
    {
      id: 'ka',
      name: 'ಕೆನಡಾ',
      description: 'KANADA'
    },
    {
      id: 'ml',
      name: 'മലയാളം',
      description: 'MALAYALAM'
    },
  ];
  constructor(private translateService: TranslateService) {}

  ngOnInit() {}

  loadSelectedLanguage(language){
this.translateService.use(language)
  }
}
