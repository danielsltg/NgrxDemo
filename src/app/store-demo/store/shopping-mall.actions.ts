import { createAction, props } from "@ngrx/store";
import { ShopItem } from "../model/shop-item";

export const loadItems = createAction("[ShoppingMallState] Load Items");

export const loadItemsSuccess = createAction(
  '[ShoppingMallState] Load Items Success',
  props<{ items: ShopItem[] }>()
);

export const addItem = createAction("[Shopping Mall State] Add Item", props<ShopItem>());
