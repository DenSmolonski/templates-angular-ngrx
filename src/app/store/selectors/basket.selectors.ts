import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IBasketState } from '../state/basket.state';

const selectBasketState = (state: IAppState) => state.basket;

export const selectBasket = createSelector(
  selectBasketState,
  (state: IBasketState) => state
);
