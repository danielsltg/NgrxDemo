import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ShoppingMallState } from "./shopping-mall.state";
import { shoppingMallFeatureKey } from "./shopping-mall.reducer";

export const ShoppingMallStateSelector = createFeatureSelector<ShoppingMallState>(shoppingMallFeatureKey);
export const ShoppingMallStateSelectItems = createSelector(ShoppingMallStateSelector, (state) => state.items);