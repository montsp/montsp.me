import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticlelistPageRoutingModule } from './articlelist-routing.module';

import { ArticlelistPage } from './articlelist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticlelistPageRoutingModule
  ],
  declarations: [ArticlelistPage]
})
export class ArticlelistPageModule {}
