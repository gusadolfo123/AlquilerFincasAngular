import { Action } from '@ngrx/store';
import { Service } from 'src/app/models/service.interface';

export enum ServicesActionType {
  LoadServices = '[Services] Load Services',
  LoadServices_Success = '[Services] Load Services',
  LoadServices_Fail = '[Services] Load Services',
}

export class LoadServices implements Action {
  readonly type = ServicesActionType.LoadServices;
}

export class LoadServicesSuccess implements Action {
  readonly type = ServicesActionType.LoadServices_Success;
  constructor(public services: Service[]) {}
}

export class LoadServicesFail implements Action {
  readonly type = ServicesActionType.LoadServices_Fail;
  constructor(public payload: any) {}
}

export type ServicesActions = LoadServices | LoadServicesSuccess | LoadServicesFail;
