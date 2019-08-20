import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as farmsActions from '../actions/farms.actions';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { FarmsService } from 'src/app/services/farms.service';
import { Farm, FarmsPerPage } from 'src/app/models/farm.interface';

@Injectable()
export class FarmsEffects {
  constructor(private actions$: Actions, private farmsService: FarmsService) {}

  @Effect()
  loadFarms$ = this.actions$.pipe(
    ofType(farmsActions.FarmsActionType.LoadFarms),
    switchMap(() => {
      return this.farmsService.getFarms().pipe(
        map(result => {
          let farmsPerPage = result.object as FarmsPerPage;
          return new farmsActions.LoadFarmsSuccess(farmsPerPage.farms);
        }),
        catchError(error => of(new farmsActions.LoadFarmsFail(error))),
      );
    }),
  );

  @Effect()
  loadFarmsPerPage$ = this.actions$.pipe(
    ofType(farmsActions.FarmsActionType.LoadFarmsPerPage),
    switchMap(data => {
      return this.farmsService.getFarmsPerPage(data['id']).pipe(
        map(result => {
          let farmsPerPage = result.object as FarmsPerPage;
          return new farmsActions.LoadFarmsPerPageSuccess(farmsPerPage);
        }),
        catchError(error => of(new farmsActions.LoadFarmsFail(error))),
      );
    }),
  );
}
