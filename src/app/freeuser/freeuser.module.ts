import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreeuserPageRoutingModule } from './freeuser-routing.module';

import { FreeuserPage } from './freeuser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreeuserPageRoutingModule
  ],
  declarations: [FreeuserPage]
})
export class FreeuserPageModule {}
