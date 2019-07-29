import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as citiesActions from '../actions/cities.actions';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { CitiesService } from 'src/app/services/cities.service';
import { City } from 'src/app/models/city.interface';

@Injectable()
export class CitiesEffects {
  constructor(private actions$: Actions, private citiesService: CitiesService) {}

  @Effect()
  loadCities$ = this.actions$.pipe(
    ofType(citiesActions.CityActionsType.LoadCities),
    switchMap(() => {
      return this.citiesService.getCities().pipe(
        map(result => {
          let cities = result.object as City[];
          return new citiesActions.LoadCitiesSuccess(cities);
        }),
        catchError(error => of(new citiesActions.LoadCitiesFail(error))),
      );
    }),
  );
}
