import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Farm, FarmsPerPage } from 'src/app/models/farm.interface';
import { LoadFarmsPerPage } from 'src/app/store/actions/farms.actions';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  farmsPerPage: FarmsPerPage = null;

  cols: any[];
  selectedCar: Farm;
  displayDialog: boolean;
  sortKey: string;
  sortField: string;
  sortOrder: number;
  sortOptions = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadFarmsPerPage(1));
    this.subscription = this.store
      .select('Farms')
      .pipe(filter(res => res.farmsPerPage != null))
      .subscribe(result => {
        this.farmsPerPage = result.farmsPerPage;
        this.cols = [{ field: 'name', header: 'Name' }];
      });

    this.sortOptions = [{ label: 'Newest First', value: '!year' }, { label: 'Oldest First', value: 'year' }, { label: 'Brand', value: 'brand' }];
  }

  selectCar(event: Event, farm: Farm) {
    this.selectedCar = farm;
    this.displayDialog = true;
    event.preventDefault();
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onDialogHide() {
    this.selectedCar = null;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
