import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadItems, loadItemsSuccess } from "./shopping-mall.actions";
import { map, switchMap, tap } from "rxjs";
import { ShoppingMallService } from "../service/shopping-mall.service";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ShoppingMallEffects {
  constructor(private readonly actions$: Actions, private readonly shoppingMallService: ShoppingMallService) { }

  loadItems$ = createEffect(() => this.actions$.pipe(
    ofType(loadItems),
    switchMap(() => this.shoppingMallService.getShopItems()),
    map((items) => loadItemsSuccess({ items })))
  );
}