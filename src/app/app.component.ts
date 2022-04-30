import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'ホーム', url: '/home', icon: 'home' },
    { title: '記事一覧', url: '/articlelist', icon: 'book'},
    { title: '記事募集', url: '/articlemail', icon: 'create'},
    { title: 'About US', url: '/aboutus', icon: 'information-circle'}
  ];
  constructor() {}
}
