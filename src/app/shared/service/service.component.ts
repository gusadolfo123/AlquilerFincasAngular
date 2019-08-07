import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Subscription } from 'rxjs';
import { Service } from 'src/app/models/service.interface';
import { LoadServicesAction } from 'src/app/store/actions/services.actions';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  services: Service[] = null;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadServicesAction());
    this.subscription = this.store
      .select('Services')
      .pipe(filter(res => res.services != null))
      .subscribe(result => {
        this.services = result.services;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
