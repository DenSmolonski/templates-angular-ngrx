import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { LoadBasketInfo } from './store/actions/basket.actions';
import { selectBasket } from './store/selectors/basket.selectors';
import { IAppState } from './store/state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  basket$ = this._store.pipe(select(selectBasket));

  constructor(private _store: Store<IAppState>) {}

  ngOnInit() {
    this._store.dispatch(new LoadBasketInfo());
  }
}
