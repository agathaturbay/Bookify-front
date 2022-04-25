import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateBookRoutingModule } from './update-book-routing.module';
import { UpdateBookComponent } from './update-book.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [UpdateBookComponent],
  imports: [CommonModule, UpdateBookRoutingModule, IonicModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UpdateBookModule {}
