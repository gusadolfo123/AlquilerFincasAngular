import { Company } from 'src/app/models/company.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Farm } from 'src/app/models/farm.interface';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { LoadFarms } from 'src/app/store/actions/farms.actions';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit, OnDestroy {
  TopCondominium: Farm = {
    description: '',
    images: [{ url: '' }],
  };
  TopUrban: Farm = {
    description: '',
    images: [{ url: '' }],
  };
  TopCountry: Farm = {
    description: '',
    images: [{ url: '' }],
  };
  subscription: Subscription = new Subscription();

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadFarms());
    this.subscription = this.store
      .select('Farms')
      .pipe(filter(res => res.farms != null))
      .subscribe(result => {
        let condominiums = result.farms.filter(farm => farm.type == 'condominio');
        let countries = result.farms.filter(farm => farm.type == 'campestre');
        let urbans = result.farms.filter(farm => farm.type == 'urbana');

        let maxCondominium = Math.max.apply(Math, condominiums.map(o => o.qualification));
        let maxCountries = Math.max.apply(Math, countries.map(o => o.qualification));
        let maxUrbans = Math.max.apply(Math, urbans.map(o => o.qualification));

        this.TopCondominium = condominiums.filter(element => element.qualification == maxCondominium)[0];
        this.TopCountry = countries.filter(element => element.qualification == maxCountries)[0];
        this.TopUrban = urbans.filter(element => element.qualification == maxUrbans)[0];

        console.log(1, this.TopCondominium.images);
        console.log(2, this.TopCountry.images);
        console.log(3, this.TopUrban.images);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
