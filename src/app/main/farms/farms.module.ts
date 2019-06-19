import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FarmsRoutes } from './farms.routes';
import { DetailComponent } from './detail/detail.component';
import { FarmsComponent } from './farms.component';

@NgModule({
  declarations: [DetailComponent, FarmsComponent],
  imports: [CommonModule, RouterModule.forChild(FarmsRoutes)],
  exports: [RouterModule, DetailComponent, FarmsComponent],
})
export class FarmsModule {}
