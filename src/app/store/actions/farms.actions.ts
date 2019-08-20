import { Action } from '@ngrx/store';
import { Farm, FarmsPerPage } from 'src/app/models/farm.interface';

export enum FarmsActionType {
  LoadFarms = '[Farms] Load Farms',
  LoadFarms_Success = '[Farms] Load Farms Success',
  LoadFarms_Fail = '[Farms] Load Farms Fail',
  LoadFarmsPerPage = '[Farms] Load Farms Per Page',
  LoadFarmsPerPage_Success = '[Farms] Load Farms Per Page Success',
}

export class LoadFarms implements Action {
  readonly type = FarmsActionType.LoadFarms;
}

export class LoadFarmsPerPage implements Action {
  readonly type = FarmsActionType.LoadFarmsPerPage;
  constructor(public id: Number) {}
}

export class LoadFarmsPerPageSuccess implements Action {
  readonly type = FarmsActionType.LoadFarmsPerPage_Success;
  constructor(public result: FarmsPerPage) {}
}

export class LoadFarmsSuccess implements Action {
  readonly type = FarmsActionType.LoadFarms_Success;
  constructor(public farms: Farm[]) {}
}

export class LoadFarmsFail implements Action {
  readonly type = FarmsActionType.LoadFarms_Fail;
  constructor(public payload: any) {}
}

export type FarmsActions = LoadFarms | LoadFarmsSuccess | LoadFarmsFail | LoadFarmsPerPage | LoadFarmsPerPageSuccess;
