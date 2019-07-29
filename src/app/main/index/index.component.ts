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
  TopCondominium: Farm = null;
  TopUrban: Farm = null;
  TopCountry: Farm = null;
  subscription: Subscription = new Subscription();

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadFarms());
    this.subscription = this.store
      .select('Farms')
      .pipe(filter(res => res.farms != null))
      .subscribe(result => {
        this.TopCondominium = result.farms.filter(farm => farm.qualification == 5 && farm.type == 'condominio')[0];
        this.TopCountry = result.farms.filter(farm => farm.qualification == 5 && farm.type == 'campestre')[0];
        this.TopUrban = result.farms.filter(farm => farm.qualification == 5 && farm.type == 'urbana')[0];
        console.log(1, this.TopCondominium);
        console.log(2, this.TopCountry);
        console.log(3, this.TopUrban);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
