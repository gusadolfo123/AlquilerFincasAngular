import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Farm } from 'src/app/models/farm.interface';
import { LoadFarms } from 'src/app/store/actions/farms.actions';

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.css'],
})
export class FarmsComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  farms: Farm[] = null;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadFarms());
    this.subscription = this.store
      .select('Farms')
      .pipe(filter(res => res.farms != null))
      .subscribe(result => {
        this.farms = result.farms;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
