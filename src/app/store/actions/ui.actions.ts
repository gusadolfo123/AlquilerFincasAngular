import { Action } from '@ngrx/store';

export enum UIActionTypes {
  ActivateLoading = '[UI Loading] Loading... ',
  DisactivateLoading = '[UI Loading] End Loading... ',
}

export class ActivateLoadingAction implements Action {
  readonly type = UIActionTypes.ActivateLoading;
}

export class DisactivateLoadingAction implements Action {
  readonly type = UIActionTypes.DisactivateLoading;
}

export type UIActions = ActivateLoadingAction | DisactivateLoadingAction;
