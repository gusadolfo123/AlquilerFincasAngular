import * as reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  UI: reducers.UIState;
  Company: reducers.CompanyState;
}

export const AppReducers: ActionReducerMap<AppState> = {
  UI: reducers.UIReducer,
  Company: reducers.CompanyReducer,
};
