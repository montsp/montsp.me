import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutsitePage } from './aboutsite.page';

const routes: Routes = [
  {
    path: '',
    component: AboutsitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutsitePageRoutingModule {}
