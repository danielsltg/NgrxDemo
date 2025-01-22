import { Component, OnDestroy, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable, of } from 'rxjs';
import { ShopItem } from '../model/shop-item';
import { ComponentStore } from '@ngrx/component-store';
import { ShoppingMallStore } from '../store/shopping-mall.store';
import { ShoppingMallService } from '../service/shopping-mall.service';

@Component({
  selector: 'app-shopping-mall-overview',
  templateUrl: './shopping-mall-overview.component.html',
  styleUrls: ['./shopping-mall-overview.component.scss'],
})
export class ShoppingMallOverviewComponent implements OnInit, OnDestroy {
  columns$: Observable<ColDef[]>;
  rows$: Observable<ShopItem[]>;
  disabled = true;

  constructor(private readonly store: ShoppingMallStore, private readonly shoppingMallService: ShoppingMallService) {
    this.rows$ = store.items$;
    this.columns$ = shoppingMallService.getColumnDefinitions();
   }

  ngOnInit(): void {
  }

  gridInitialized() {
    this.disabled = !this.disabled;
  }

  ngOnDestroy(): void {
    // this should go in parent component
    // this.store.destroy();
  }
}
