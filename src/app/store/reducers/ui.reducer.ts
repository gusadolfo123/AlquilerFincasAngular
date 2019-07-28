import * as fromUI from '../actions/ui.actions';

export interface UIState {
  isLoading: boolean;
}

const initialState: UIState = {
  isLoading: false,
};

export function UIReducer(state = initialState, action: fromUI.UIActions): UIState {
  switch (action.type) {
    case fromUI.UIActionTypes.ActivateLoading:
      return { isLoading: true };
    case fromUI.UIActionTypes.DisactivateLoading:
      return { isLoading: false };
    default:
      return state;
  }
}
