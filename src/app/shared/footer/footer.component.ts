import { Component, OnInit, OnDestroy } from '@angular/core';
import { Company } from 'src/app/models/company.interface';
import { Phone } from 'src/app/models/phone.interface';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { CompanyState } from 'src/app/store/reducers/company.reducer';
import { LoadCompany } from 'src/app/store/actions/company.actions';
import { AppState } from 'src/app/store/app.reducer';
import { filter } from 'rxjs/operators';

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
  subscription: Subscription = new Subscription();
  loading: boolean;
  error: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.subscription = this.store
      .select('Company')
      .pipe(filter(res => res.company != null)) // solo permite pasar el observable si este no es null
      .subscribe(result => {
        this.company = result.company;
        this.phones = result.company.phones;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
