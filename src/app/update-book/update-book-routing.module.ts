import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateBookComponent } from './update-book.component';

const routes: Routes = [{ path: '', component: UpdateBookComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateBookRoutingModule {}
