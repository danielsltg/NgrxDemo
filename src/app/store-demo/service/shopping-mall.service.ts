import { Injectable } from "@angular/core";
import { ShopItem } from "../model/shop-item";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ColDef } from "ag-grid-community";

@Injectable({
  providedIn: 'root'
})
export class ShoppingMallService {
  constructor(private readonly httpClient: HttpClient){}

  getShopItems() : Observable<ShopItem[]> {
    return this.httpClient.get<ShopItem[]>('assets/data.json');
  }

  getColumnDefinitions(): Observable<ColDef<ShopItem>[]> {
    return this.httpClient.get<ColDef<ShopItem>[]>('assets/cols.json');
  }
}
