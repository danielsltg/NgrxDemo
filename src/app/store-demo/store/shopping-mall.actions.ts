import { createAction, props } from "@ngrx/store";
import { ShopItem } from "../model/shop-item";

export const loadItems = createAction("[ShoppingMallState] Load Items");

export const loadItemsSuccess = createAction(
  '[ShoppingMallState] Load Items Success',
  props<{ items: ShopItem[] }>()
);