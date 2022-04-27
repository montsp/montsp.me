import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ionic',
  templateUrl: './ionic.page.html',
  styleUrls: ['./ionic.page.scss'],
})
export class IonicPage implements OnInit {
  public ionicCategory = [
   {
     title: 'ionicとはなんだー',
     path: '/article/1',
     content: 'ionicとは、webサイトを作れる人はアプリも作れてしまうといった、HTMLやJavascript(正確にはJavascriptの拡張言語)が基本となっているアプリ開………',
   },
   {
     title: 'ionicのはじめ方',
     path: '/article/2',
     content: 'ionicを始めるには...',
   },
   
  ];

  constructor() { }

  ngOnInit() {
  }

}
