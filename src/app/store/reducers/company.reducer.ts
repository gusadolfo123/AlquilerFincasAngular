import * as fromCompany from '../actions/company.actions';
import { Company } from '../../models/company.interface';

export interface CompanyState {
  company: Company;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initialState: CompanyState = {
  company: null,
  loaded: false,
  loading: false,
  error: null,
};

export function CompanyReducer(state = initialState, action: fromCompany.CompanyActions): CompanyState {
  switch (action.type) {
    case fromCompany.CompanyActionType.LoadCompany:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case fromCompany.CompanyActionType.LoadCompany_Success:
      return {
        ...state,
        loaded: true,
        loading: false,
        company: { ...action.company },
      };
    case fromCompany.CompanyActionType.LoadCompany_Fail:
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
    default:
      return state;
  }
}
