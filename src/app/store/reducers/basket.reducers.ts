import { BasketActions, EBasketActions } from '../actions/basket.actions';
import { IBasketState, initialBasketState } from '../state/basket.state';

export const basketReducers = (
  state = initialBasketState,
  action: BasketActions
): IBasketState => {
  switch (action.type) {
    case EBasketActions.LoadBasketInfoSuccess:
      return {
        ...state,
        id: action.payload.id,
        userId: action.payload.userId,
        products: action.payload.products,
      };
    default:
      return state;
  }
};
