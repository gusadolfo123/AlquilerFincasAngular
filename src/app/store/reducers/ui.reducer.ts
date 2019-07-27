import * as fromUI from '../actions/ui.actions';

export interface State {
  isLoading: boolean;
}

const initialState: State = {
  isLoading: false,
};

export function LoadingReducer(state = initialState, action: fromUI.UIActions): State {
  switch (action.type) {
    case fromUI.UIActionTypes.ActivateLoading:
      return { isLoading: true };
    case fromUI.UIActionTypes.DisactivateLoading:
      return { isLoading: false };
    default:
      return state;
  }
}
