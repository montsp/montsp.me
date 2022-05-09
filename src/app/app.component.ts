import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router' 
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'ホーム', url: '/', icon: 'home' },
    { title: '記事一覧', url: '/articlelist', icon: 'book'},
    { title: '記事募集', url: '/articlemail', icon: 'create'},
    { title: 'About US', url: '/aboutus', icon: 'information-circle'},
    { title: 'お問い合わせ', url: '/otoiawase', icon: 'help',},
    { title: 'このサイトについて', url: '/aboutsite', icon: 'at',},
    { title: 'ポリシー', url: '/policy', icon: 'reader',},
  ];
  constructor(public router: Router,) {}

  ngOnInit() {
    this.router.events
      .subscribe(params => {
        if (params instanceof NavigationEnd) {
          gtag('config', 'UA-227577724-1', { page_path: params.url });
        }
      });
  }
}
 



