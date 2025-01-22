import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { takeUntil } from 'rxjs';
import { ShoppingMallService } from '../service/shopping-mall.service';
import { ShoppingMallState } from './shopping-mall.state';
import { ShopItem } from '../model/shop-item';

@Injectable({
  providedIn: 'root',
})
export class ShoppingMallStore extends ComponentStore<ShoppingMallState> {
  constructor(private readonly shoppingMallService: ShoppingMallService) {
    super({ items: [] });
  }

  items$ = this.select((state) => state.items);

  addItem(item: ShopItem){
    this.patchState((state) => ({ items: [...state.items, item]}));
  }

  nextId$ = this.select((state) => Math.max(...state.items.map(i => i.id)) + 1);

  init() {
    this.shoppingMallService
      .getShopItems()
      .pipe(takeUntil(this.destroy$))
      .subscribe((items) => this.setState({ items }));
  }
}
