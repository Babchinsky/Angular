import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeeWorldComponent } from './see-world/see-world.component';
import { DealsComponent } from './deals/deals.component';

@NgModule({
  declarations: [
    AppComponent,
    SeeWorldComponent,
    DealsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
