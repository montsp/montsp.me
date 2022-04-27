import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { IonicModule } from '@ionic/angular';
import { No1Page } from './no1/no1.page';
import { No2Page } from './no2/no2.page';

const routes: Routes = [
  {
    path: '1',
    component: No1Page
  },
  {
    path: '2',
    component: No2Page
  },
];



@NgModule({
  declarations: [No1Page, No2Page, ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class ArticleModule { }
