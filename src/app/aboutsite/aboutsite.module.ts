import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutsitePageRoutingModule } from './aboutsite-routing.module';

import { AboutsitePage } from './aboutsite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutsitePageRoutingModule
  ],
  declarations: [AboutsitePage]
})
export class AboutsitePageModule {}
