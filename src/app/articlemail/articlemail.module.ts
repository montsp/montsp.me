import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticlemailPageRoutingModule } from './articlemail-routing.module';

import { ArticlemailPage } from './articlemail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticlemailPageRoutingModule
  ],
  declarations: [ArticlemailPage]
})
export class ArticlemailPageModule {}
