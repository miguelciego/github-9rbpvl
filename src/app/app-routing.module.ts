import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tabla1Component } from './tabla1/tabla1.component';


const routes: Routes = [
  { path: 'tabla', component: Tabla1Component },
 // { path: 'products/:productId', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
