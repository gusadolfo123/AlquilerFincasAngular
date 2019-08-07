import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as servicesActions from '../actions/services.actions';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { Service } from 'src/app/models/service.interface';
import { ServicesService } from 'src/app/services/services.service';

@Injectable()
export class ServicesEffects {
  constructor(private actions$: Actions, private service: ServicesService) {}

  @Effect()
  loadServices$ = this.actions$.pipe(
    ofType(servicesActions.ServicesActionType.LoadServices),
    switchMap(() => {
      return this.service.getServices().pipe(
        map(result => {
          let services = result.object as Service[];
          return new servicesActions.LoadServicesSuccessAction(services);
        }),
        catchError(error => of(new servicesActions.LoadServicesFailAction(error))),
      );
    }),
  );
}
