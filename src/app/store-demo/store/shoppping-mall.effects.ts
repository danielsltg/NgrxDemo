import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadItems, loadItemsSuccess } from "./shopping-mall.actions";
import { map, switchMap } from "rxjs";
import { ShoppingMallService } from "../service/shopping-mall.service";

export class ShoppingMallEffects {
  constructor(private readonly actions$: Actions, private readonly shoppingMallService: ShoppingMallService){}

  loadItems$ = createEffect(() => this.actions$.pipe(
    ofType(loadItems),
    switchMap(() => this.shoppingMallService.getShopItems()),
    map((items) => loadItemsSuccess({items}))
    )
  );
}