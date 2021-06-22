import { Action } from '@ngrx/store';
import { IBasketState } from '../state/basket.state';

export enum EBasketActions {
  LoadBasketInfo = '[Basket] Load Basket Info',
  LoadBasketInfoSuccess = '[Basket] Load Basket Info Success',
}

export class LoadBasketInfo implements Action {
  public readonly type = EBasketActions.LoadBasketInfo;
}

export class LoadBasketInfoSuccess implements Action {
  public readonly type = EBasketActions.LoadBasketInfoSuccess;
  constructor(public payload: IBasketState) {}
}

export type BasketActions = LoadBasketInfo | LoadBasketInfoSuccess;
