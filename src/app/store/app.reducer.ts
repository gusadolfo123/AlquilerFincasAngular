import { ActionReducerMap } from '@ngrx/store';
import { State, LoadingReducer } from './reducers/ui.reducer';
import { CompanyState, CompanyReducer } from './reducers/company.reducer';

export interface AppState {
  UI: State;
  Company: CompanyState;
}

export const AppReducers: ActionReducerMap<AppState> = {
  UI: LoadingReducer,
  Company: CompanyReducer,
};
