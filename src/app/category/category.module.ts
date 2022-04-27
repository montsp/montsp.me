import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { IonicModule } from '@ionic/angular';
import { IonicPage } from './ionic/ionic.page';
import { MacosPage } from './macos/macos.page';
import { CategoryPage } from './category/category.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryPage
  },
  {
    path: 'ionic',
    component: IonicPage
  },
  {
    path: 'macos',
    component: MacosPage
  }
];



@NgModule({
  declarations: [CategoryPage, IonicPage, MacosPage, ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class CategoryModule { }
