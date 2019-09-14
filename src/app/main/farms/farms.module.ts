import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FarmsRoutes } from './farms.routes';
import { DetailComponent } from './detail/detail.component';
import { FarmsComponent } from './farms.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableModule } from 'primeng/table';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [DetailComponent, FarmsComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(FarmsRoutes), TableModule, DataViewModule, DropdownModule, FormsModule, TabViewModule, PanelModule],
  exports: [RouterModule, DetailComponent, FarmsComponent, TableModule, DataViewModule, DropdownModule, FormsModule, TabViewModule, PanelModule],
})
export class FarmsModule {}
