import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DiscoverRoutingModule } from './discover-routing.module';
import { DiscoverComponent } from './discover.component';

@NgModule({
  declarations: [DiscoverComponent],
  imports: [CommonModule, DiscoverRoutingModule, IonicModule],
})
export class DiscoverModule {}
