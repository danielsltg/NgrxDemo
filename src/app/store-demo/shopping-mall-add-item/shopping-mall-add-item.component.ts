import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ShoppingMallStateNextId } from '../store/shopping-mall.selector';
import { takeUntil } from 'rxjs';
import { addItem } from '../store/shopping-mall.actions';

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

  constructor(private readonly store: Store) {
    store.select(ShoppingMallStateNextId).subscribe(nextId => this.id.setValue(nextId))
  }

  ngOnInit(): void {
  }

  addShopItem() {
    this.store.dispatch(addItem(this.addingForm.value))
  }
}
