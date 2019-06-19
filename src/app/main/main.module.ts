import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [IndexComponent, AboutComponent, ContactComponent],
  imports: [CommonModule, MainRoutingModule, SharedModule],
})
export class MainModule {}
