import { Action } from '@ngrx/store';
import { Service } from 'src/app/models/service.interface';

export enum ServicesActionType {
  LoadServices = '[Services] Load Services',
  LoadServices_Success = '[Services] Load Services Success',
  LoadServices_Fail = '[Services] Load Services Fail',
}

export class LoadServicesAction implements Action {
  readonly type = ServicesActionType.LoadServices;
}

export class LoadServicesSuccessAction implements Action {
  readonly type = ServicesActionType.LoadServices_Success;
  constructor(public services: Service[]) {}
}

export class LoadServicesFailAction implements Action {
  readonly type = ServicesActionType.LoadServices_Fail;
  constructor(public payload: any) {}
}

export type ServicesActions = LoadServicesAction | LoadServicesSuccessAction | LoadServicesFailAction;
