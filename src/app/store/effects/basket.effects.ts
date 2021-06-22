import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  EBasketActions,
  LoadBasketInfo,
  LoadBasketInfoSuccess,
} from '../actions/basket.actions';
import { IAppState } from '../state/app.state';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class BasketEffects {
  loadBasketInfo$ = createEffect(() => {
    return this._actions$.pipe(
      ofType<LoadBasketInfo>(EBasketActions.LoadBasketInfo),
      switchMap(() => {
        return of(
          new LoadBasketInfoSuccess({
            id: '1',
            userId: '1',
            products: [
              {
                product: {
                  id: '1',
                  name: 'product name',
                  sizes: [
                    {
                      id: '1',
                      name: 's',
                    },
                  ],
                  colours: [
                    {
                      id: '1',
                      name: 'red',
                    },
                  ],
                },
                colour: {
                  id: '1',
                  name: 'red',
                },
                size: {
                  id: '1',
                  name: 's',
                },
                count: 1,
              },
              {
                product: {
                  id: '2',
                  name: 'product name 2',
                  sizes: [
                    {
                      id: '1',
                      name: 's',
                    },
                  ],
                  colours: [
                    {
                      id: '1',
                      name: 'red',
                    },
                  ],
                },
                colour: {
                  id: '1',
                  name: 'red',
                },
                size: {
                  id: '1',
                  name: 's',
                },
                count: 1,
              },
            ],
          })
        );
      })
    );
  });
  constructor(private _stote: Store<IAppState>, private _actions$: Actions) {}
}
