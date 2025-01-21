import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'rxjs',
    loadChildren: () => import('./rxjs-demo/rxjs-demo.module').then((m) => m.RxjsDemoModule)
  },
  {
    path: 'store',
    loadChildren: () => import('./store-demo/store-demo.module').then((m) => m.StoreDemoModule)
  },
  {
    path: '',
    redirectTo: 'rxjs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
