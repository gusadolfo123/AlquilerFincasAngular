import * as fromService from '../actions/services.actions';
import { Service } from 'src/app/models/service.interface';

export interface ServicesState {
  services: Service[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initialState: ServicesState = {
  services: null,
  loaded: false,
  loading: false,
  error: null,
};

export function ServicesReducer(state = initialState, action: fromService.ServicesActions): ServicesState {
  switch (action.type) {
    case fromService.ServicesActionType.LoadServices:
      return { ...state, loading: true, error: null };
    case fromService.ServicesActionType.LoadServices_Success:
      return { ...state, loaded: true, loading: false, services: [...action.services] };
    case fromService.ServicesActionType.LoadServices_Fail:
      return { ...state, loading: false, loaded: true, error: {} };
    default:
      return state;
  }
}
