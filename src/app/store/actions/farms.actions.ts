import { Action } from '@ngrx/store';
import { Farm } from 'src/app/models/farm.interface';

export enum FarmsActionType {
  LoadFarms = '[Farms] Load Farms',
  LoadFarms_Success = '[Farms] Load Farms Success',
  LoadFarms_Fail = '[Farms] Load Farms Fail',
}

export class LoadFarms implements Action {
  readonly type = FarmsActionType.LoadFarms;
}

export class LoadFarmsSuccess implements Action {
  readonly type = FarmsActionType.LoadFarms_Success;
  constructor(public farms: Farm[]) {}
}

export class LoadFarmsFail implements Action {
  readonly type = FarmsActionType.LoadFarms_Fail;
  constructor(public payload: any) {}
}

export type FarmsActions = LoadFarms | LoadFarmsSuccess | LoadFarmsFail;
