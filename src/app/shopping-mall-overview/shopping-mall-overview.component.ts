import { Component, OnInit } from '@angular/core';
import { ShoppingMallFacade } from '../store/shopping-mall.facade';

@Component({
  selector: 'app-shopping-mall-overview',
  templateUrl: './shopping-mall-overview.component.html',
  styleUrls: ['./shopping-mall-overview.component.scss']
})
export class ShoppingMallOverviewComponent implements OnInit {

  constructor(private readonly facade: ShoppingMallFacade) { }

  ngOnInit(): void {
    this.facade.initializeShoppingMallItems();
  }

}
