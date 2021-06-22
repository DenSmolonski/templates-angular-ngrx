import { RouterReducerState } from '@ngrx/router-store';
import { IBasketState, initialBasketState } from './basket.state';

export interface IAppState {
  router?: RouterReducerState;
  basket: IBasketState;
}

export const initialAppState: IAppState = {
  basket: initialBasketState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
