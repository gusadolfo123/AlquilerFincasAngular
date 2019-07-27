import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { Company } from 'src/app/models/company.interface';
import { Phone } from 'src/app/models/phone.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [],
})
export class FooterComponent implements OnInit {
  private company: Company = {
    name: '',
    dir: '',
    coordinate: {},
    phones: [],
    images: [],
    whatsapp: '',
    mission: '',
    vision: '',
    description: '',
  };
  private phones: Phone[];
  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.getCompany();
  }

  getCompany() {
    this.companyService.getCompany().subscribe(result => {
      this.company = result.object[0] as Company;
      this.company.whatsapp;
      this.phones = this.company.phones.filter(phone => phone.phone_type == 'celular');
    });
  }
}
