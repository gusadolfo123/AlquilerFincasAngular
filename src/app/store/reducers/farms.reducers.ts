import * as fromFarms from '../actions/farms.actions';
import { Farm, FarmsPerPage } from 'src/app/models/farm.interface';

export interface FarmsState {
  farms: Farm[];
  loaded: boolean;
  loading: boolean;
  error: any;
  farmsPerPage: FarmsPerPage;
}

const initialState: FarmsState = {
  farms: null,
  loaded: false,
  loading: false,
  error: null,
  farmsPerPage: null,
};

export function FarmsReducer(state = initialState, action: fromFarms.FarmsActions): FarmsState {
  switch (action.type) {
    case fromFarms.FarmsActionType.LoadFarms:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case fromFarms.FarmsActionType.LoadFarms_Success:
      return {
        ...state,
        loading: false,
        loaded: true,
        farms: [...action.farms],
      };
    case fromFarms.FarmsActionType.LoadFarms_Fail:
      return {
        ...state,
        loaded: false,
        loading: false,
        error: {
          status: action.payload.status,
          message: action.payload.message,
          url: action.payload.url,
        },
      };
    case fromFarms.FarmsActionType.LoadFarmsPerPage:
      return {
        ...state,
        loaded: false,
        loading: true,
        error: null,
      };
    case fromFarms.FarmsActionType.LoadFarmsPerPage_Success:
      return {
        ...state,
        loaded: true,
        loading: false,
        error: null,
        farmsPerPage: { ...action.result },
      };
    default:
      return state;
  }
}
