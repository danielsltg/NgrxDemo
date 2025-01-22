import { createReducer, on } from "@ngrx/store";
import { initialState } from "./shopping-mall.state";
import { loadItems } from "./shopping-mall.actions";

export const shoppingMallFeatureKey: string = "ShoppingMallState";

export const shoppingMallReducer = createReducer(
    initialState,
    on(loadItems, () => ({items: []}))
)