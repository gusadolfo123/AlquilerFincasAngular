import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as farmsActions from '../actions/farms.actions';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { FarmsService } from 'src/app/services/farms.service';
import { Farm } from 'src/app/models/farm.interface';

@Injectable()
export class FarmsEffects {
  constructor(private actions$: Actions, private farmsService: FarmsService) {}

  @Effect()
  loadFarms$ = this.actions$.pipe(
    ofType(farmsActions.FarmsActionType.LoadFarms),
    switchMap(() => {
      return this.farmsService.getFarms().pipe(
        map(result => {
          let farms = result.object as Farm[];
          return new farmsActions.LoadFarmsSuccess(farms);
        }),
        catchError(error => of(new farmsActions.LoadFarmsFail(error))),
      );
    }),
  );
}
