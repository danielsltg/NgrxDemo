import { createReducer, on } from "@ngrx/store";
import { initialState } from "./shopping-mall.state";
import { addItem, loadItems, loadItemsSuccess } from "./shopping-mall.actions";

export const shoppingMallFeatureKey: string = "ShoppingMallState";

export const shoppingMallReducer = createReducer(
    initialState,
    on(loadItems, () => ({ items: [] })),
    on(loadItemsSuccess, (state, { items }) => ({ ...state, items })),
    on(addItem, (state, newItem) => ({ items: [...state.items, newItem]})),
)