import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketPageComponent } from './pages/basket-page/basket-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'basket', component: BasketPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'product/:id', component: ProductPageComponent },
  // { path: 'create', component: CreatePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
