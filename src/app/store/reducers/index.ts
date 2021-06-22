import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { basketReducers } from './basket.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  basket: basketReducers,
  router: routerReducer,
};
