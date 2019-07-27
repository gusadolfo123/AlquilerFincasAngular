import { ActionReducerMap } from '@ngrx/store';
import { State, LoadingReducer } from './reducers/ui.reducer';

export interface AppState {
  UI: State;
}

export const AppReducers: ActionReducerMap<AppState> = {
  UI: LoadingReducer,
};
