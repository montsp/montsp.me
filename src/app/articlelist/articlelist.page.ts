import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articlelist',
  templateUrl: './articlelist.page.html',
  styleUrls: ['./articlelist.page.scss'],
})
export class ArticlelistPage implements OnInit {
  public articlePage = [
    {
      title: 'ionicのはじめ方',
      path: '/article/2',
      content: 'ionicを始めるには...',
    },
    {
      title: 'ionicとはなんだー',
      path: '/article/1',
      content: 'ionicとは、webサイトを作れる人はアプリも作れてしまうといった、HTMLやJavascript(正確にはJavascriptの拡張言語)が基本となっているアプリ開………',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
