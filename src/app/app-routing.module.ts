import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tabla1Component } from './tabla1/tabla1.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PersonasComponent } from './personas/personas.component'


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'tabla1', component: Tabla1Component },
  { path: 'per', component: PersonasComponent },
 // { path: 'products/:productId', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
