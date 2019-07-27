import * as fromFarm from '../actions/farm.actions';
import { Farm } from '../../models/farm.interface';
import { RouteReuseStrategy } from '@angular/router';

export interface FarmState {
  farm: Farm;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initialState: FarmState = {
  farm: null,
  loaded: false,
  loading: false,
  error: null,
};

export function FarmReducer(state = initialState, action: fromFarm.FarmActions): FarmState {
  switch (action.type) {
    case fromFarm.FarmActionType.LoadFarm:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case fromFarm.FarmActionType.LoadFarm_Success:
      return {
        ...state,
        loading: false,
        loaded: true,
        farm: { ...state.farm },
      };
    case fromFarm.FarmActionType.LoadFarm_Fail:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: {
          error: action.paylod.status,
          message: action.paylod.message,
          url: action.paylod.url,
        },
      };
    default:
      return state;
  }
}
