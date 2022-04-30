import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlemailPage } from './articlemail.page';

const routes: Routes = [
  {
    path: '',
    component: ArticlemailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlemailPageRoutingModule {}
