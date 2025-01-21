import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable, of } from 'rxjs';
import { ShopItem } from '../model/shop-item';

@Component({
  selector: 'app-shopping-mall-overview',
  templateUrl: './shopping-mall-overview.component.html',
  styleUrls: ['./shopping-mall-overview.component.scss']
})
export class ShoppingMallOverviewComponent implements OnInit {
  columns$?: Observable<ColDef[]>;
  rows$?: Observable<ShopItem[]>;
  disabled = true;

  constructor() { }

  ngOnInit(): void {
  }

  gridInitialized() {
    this.disabled = !this.disabled;
  }
}
