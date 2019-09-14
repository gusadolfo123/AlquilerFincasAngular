import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { TableModule } from 'primeng/table';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { AccordionModule } from 'primeng/accordion'; //accordion and accordion tab
import { FormsModule } from '@angular/forms';
import { TabViewModule, TabView } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [IndexComponent, AboutComponent, ContactComponent],
  imports: [CommonModule, MainRoutingModule, SharedModule, TableModule, DataViewModule, DropdownModule, AccordionModule, FormsModule, TabViewModule, PanelModule],
})
export class MainModule {}
