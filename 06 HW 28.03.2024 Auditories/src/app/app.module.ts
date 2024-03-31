import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortByPipe } from './pipes/sort-by.pipe';
import { FormsModule } from '@angular/forms';
import { FilterByPipe } from './pipes/filter-by.pipe';
import { FilterByGroupPipe } from './pipes/filter-by-group.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SortByPipe,
    FilterByPipe,
    FilterByGroupPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
