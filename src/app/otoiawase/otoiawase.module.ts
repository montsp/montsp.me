import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtoiawasePageRoutingModule } from './otoiawase-routing.module';

import { OtoiawasePage } from './otoiawase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtoiawasePageRoutingModule
  ],
  declarations: [OtoiawasePage]
})
export class OtoiawasePageModule {}
