import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingMallAddItemComponent } from './shopping-mall-add-item/shopping-mall-add-item.component';
import { ShoppingMallOverviewComponent } from './shopping-mall-overview/shopping-mall-overview.component';
import { Store, StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ShoppingMallAddItemComponent,
    ShoppingMallOverviewComponent
  ],
  imports: [
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
    AgGridModule,
    RouterModule.forChild([
      {
        path: '',
        children: [
          {
            path: 'overview',
            component: ShoppingMallOverviewComponent
          },
          {
            path: 'add',
            component: ShoppingMallAddItemComponent
          },
          {
            path: '',
            redirectTo: 'overview',
            pathMatch: 'full'
          }
        ]
      }
    ])
  ],
  providers: []
})
export class StoreDemoModule { }
