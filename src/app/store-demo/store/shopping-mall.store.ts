import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { takeUntil } from 'rxjs';
import { ShoppingMallService } from '../service/shopping-mall.service';
import { ShoppingMallState } from './shopping-mall.state';

@Injectable({
  providedIn: 'root',
})
export class ShoppingMallStore extends ComponentStore<ShoppingMallState> {
  constructor(private readonly shoppingMallService: ShoppingMallService) {
    super({ items: [] });
  }

  items$ = this.select((state) => state.items);

  init() {
    this.shoppingMallService
      .getShopItems()
      .pipe(takeUntil(this.destroy$))
      .subscribe((items) => this.setState({ items }));
  }
}
