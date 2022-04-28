import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { IonicModule } from '@ionic/angular';
import { No1Page } from './no1/no1.page';
import { No2Page } from './no2/no2.page';
import { No3Page } from './no3/no3.page';

const routes: Routes = [
  {
    path: '1',
    component: No1Page
  },
  {
    path: '2',
    component: No2Page
  },
  {
    path: '3',
    component: No3Page
  }
];



@NgModule({
  declarations: [No1Page, No2Page, No3Page, ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class ArticleModule { }
