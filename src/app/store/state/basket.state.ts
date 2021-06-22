import { IProductBasketInfo } from 'src/app/types';

export interface IBasketState {
  id?: string;
  userId?: string;
  products?: Array<IProductBasketInfo>;
}

export const initialBasketState: IBasketState = {
  id: undefined,
  userId: undefined,
  products: undefined,
};
