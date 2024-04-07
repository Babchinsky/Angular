import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { ShopComponent } from './components/shop/shop.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './components/product/product.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    AdminPanelComponent,
    ProductComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule, // Добавление HttpClientModule в раздел imports
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
