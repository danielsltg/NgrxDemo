import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable, of } from 'rxjs';
import { ShopItem } from '../model/shop-item';
import { ShoppingMallService } from '../service/shopping-mall.service';
import { ShoppingMallState } from '../store/shopping-mall.state';
import { Store } from '@ngrx/store';
import { ShoppingMallStateSelectItems } from '../store/shopping-mall.selector';

@Component({
  selector: 'app-shopping-mall-overview',
  templateUrl: './shopping-mall-overview.component.html',
  styleUrls: ['./shopping-mall-overview.component.scss']
})
export class ShoppingMallOverviewComponent implements OnInit {
  columns$!: Observable<ColDef[]>;
  rows$!: Observable<ShopItem[]>;
  disabled = true;

  constructor(private readonly shoppingMallService: ShoppingMallService, private readonly store: Store ) { }

  ngOnInit(): void {
    this.columns$ = this.shoppingMallService.getColumnDefinitions();
    this.columns$.subscribe(console.log);
    this.rows$ = this.store.select(ShoppingMallStateSelectItems);
    this.rows$.subscribe(console.log);
  }

  gridInitialized() {
    this.disabled = !this.disabled;
  }
}
