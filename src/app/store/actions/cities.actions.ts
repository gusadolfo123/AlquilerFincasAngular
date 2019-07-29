import { Action } from '@ngrx/store';
import { City } from 'src/app/models/city.interface';

export enum CityActionsType {
  LoadCities = '[City] Load Cities',
  LoadCities_Success = '[City] Load Cities Success',
  LoadCities_Fail = '[City] Load Cities Fail',
}

export class LoadCities implements Action {
  readonly type = CityActionsType.LoadCities;
  constructor() {}
}

export class LoadCitiesSuccess implements Action {
  readonly type = CityActionsType.LoadCities_Success;
  constructor(public cities: City[]) {}
}

export class LoadCitiesFail implements Action {
  readonly type = CityActionsType.LoadCities_Fail;
  constructor(public payload: any) {}
}

export type CityActions = LoadCities | LoadCitiesSuccess | LoadCitiesFail;
