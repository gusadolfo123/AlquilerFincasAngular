import { Company } from 'src/app/models/company.interface';
import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  company: [Company];
  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.getCompany();
  }

  getCompany() {
    this.companyService.getCompany().subscribe(result => {
      this.company = result.object as [Company];
      console.log(this.company);
    });
  }
}
