import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { SuggestionsComponent } from './suggestions.component';

@NgModule({
  imports: [CommonModule, TranslateModule, IonicModule, SuggestionsRoutingModule],
  declarations: [SuggestionsComponent],
})
export class SuggestionsModule {}
