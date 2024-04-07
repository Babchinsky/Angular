import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  { path: '', redirectTo: '/admin', pathMatch: 'full' }, // Предположим, что у вас есть домашняя страница
  { path: 'admin', component: AdminPanelComponent }, // Предположим, что HomeComponent - ваш домашний компонент
  { path: 'shop', component: ShopComponent }, // Предположим, что ProductListComponent - ваш компонент списка продуктов
  { path: '**', redirectTo: '/admin' }, // Перенаправление на домашнюю страницу, если URL-адрес не совпадает ни с одним из маршрутов
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
