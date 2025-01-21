import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-mall-add-item',
  templateUrl: './shopping-mall-add-item.component.html',
  styleUrls: ['./shopping-mall-add-item.component.scss']
})
export class ShoppingMallAddItemComponent implements OnInit {
  id = new FormControl(0);
  name = new FormControl('', Validators.required);
  manufacturer = new FormControl('', Validators.required);
  category = new FormControl('', Validators.required);
  cost = new FormControl(0.0, [Validators.required, Validators.min(0.5)]);

  addingForm: FormGroup = new FormGroup({
    id: this.id,
    name: this.name,
    category: this.category,
    manufacturer: this.manufacturer,
    cost: this.cost,
  });

  constructor() { }

  ngOnInit(): void {
  }

  addShopItem() {
  }
}
