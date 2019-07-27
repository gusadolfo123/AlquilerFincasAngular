import { Action } from '@ngrx/store';
import { Farm } from 'src/app/models/farm.interface';

export enum FarmActionType {
  LoadFarm = '[Farm] Load Farm',
  LoadFarm_Success = '[Farm] Load Farm Success',
  LoadFarm_Fail = '[Farm] Load Farm Fail',
}

export class LoadFarm implements Action {
  readonly type: FarmActionType.LoadFarm;
  constructor(public id: string) {}
}

export class LoadFarmSuccess implements Action {
  readonly type: FarmActionType.LoadFarm_Success;
  constructor(public farm: Farm) {}
}

export class LoadFarmFail implements Action {
  readonly type: FarmActionType.LoadFarm_Fail;
  constructor(public paylod: any) {}
}

export type FarmActions = LoadFarm | LoadFarmSuccess | LoadFarmFail;
