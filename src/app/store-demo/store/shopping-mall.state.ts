import { ShopItem } from "../model/shop-item";

export interface ShoppingMallState {
    items: ShopItem[];
}

export const initialState: ShoppingMallState = {
    items: []
}