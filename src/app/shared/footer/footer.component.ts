import { Component, OnInit, OnDestroy } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { Company } from 'src/app/models/company.interface';
import { Phone } from 'src/app/models/phone.interface';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { CompanyState } from 'src/app/store/reducers/company.reducer';
import { LoadCompany } from 'src/app/store/actions/company.actions';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [],
})
export class FooterComponent implements OnInit, OnDestroy {
  company: Company = {
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
  phones: Phone[];
  suscription: Subscription = new Subscription();
  loading: boolean;
  error: any;

  constructor(private store: Store<CompanyState>) {}

  ngOnInit() {
    this.getCompany();
  }

  getCompany() {
    this.store.dispatch(new LoadCompany());
    this.suscription = this.store.select('company').subscribe(company => {
      console.log(company);
      this.company = company;
    });
  }

  ngOnDestroy() {
    this.suscription.unsubscribe();
  }
}
