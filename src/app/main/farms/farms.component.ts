import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Farm, FarmsPerPage } from 'src/app/models/farm.interface';
import { LoadFarms, LoadFarmsPerPage } from 'src/app/store/actions/farms.actions';

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.css'],
})
export class FarmsComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  farmsPerPage: FarmsPerPage = null;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadFarmsPerPage(1));
    this.subscription = this.store
      .select('Farms')
      .pipe(filter(res => res.farmsPerPage != null))
      .subscribe(result => {
        this.farmsPerPage = result.farmsPerPage;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
