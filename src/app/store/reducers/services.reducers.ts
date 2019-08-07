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

export function ServiceReducer(state = initialState, action: fromService.ServicesActions): ServicesState {
  switch (action.type) {
    case fromService.ServicesActionType.LoadServices:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case fromService.ServicesActionType.LoadServices_Success:
      return {
        ...state,
        loading: false,
        loaded: true,
        services: [...action.services],
      };
    case fromService.ServicesActionType.LoadServices_Fail:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: {
          status: action.payload.status,
          message: action.payload.message,
          url: action.payload.url,
        },
      };
    default:
      return state;
  }
}
