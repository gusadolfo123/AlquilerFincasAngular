import * as fromCities from '../actions/cities.actions';
import { City } from 'src/app/models/city.interface';

export interface CitiesState {
  cities: City[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initialState: CitiesState = {
  cities: null,
  loaded: false,
  loading: false,
  error: null,
};

export function CityReducer(state = initialState, action: fromCities.CityActions): CitiesState {
  switch (action.type) {
    case fromCities.CityActionsType.LoadCities:
      return { ...state, loading: true, loaded: false };
    case fromCities.CityActionsType.LoadCities_Success:
      return { ...state, loaded: true, loading: false, cities: [...action.cities] };
    case fromCities.CityActionsType.LoadCities_Fail:
      return {
        ...state,
        loaded: true,
        loading: false,
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
