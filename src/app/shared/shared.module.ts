import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { SliderComponent } from './slider/slider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, NavbarComponent, SearchComponent, SliderComponent, ServiceComponent],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, MaterialModule],
  exports: [FooterComponent, HeaderComponent, NavbarComponent, SearchComponent, SliderComponent, ServiceComponent],
})
export class SharedModule {}
