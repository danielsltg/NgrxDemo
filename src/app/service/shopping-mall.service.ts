import { Injectable } from "@angular/core";
import { ShopItem } from "../model/shop-item";
import * as fs from  'fs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingMallService {
  getShopItems() : ShopItem[] {
    const text = fs.readFileSync('../../data/data.json', 'utf-8');
    return JSON.parse(text)
  }
}
