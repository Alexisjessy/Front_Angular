import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationConfig } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AppRoutingModule } from './app-routing.module';
import { Constants } from './constants/constants';
import { ProductService } from './services/product.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    Constants, 
    ProductService,
    provideHttpClient(withFetch()) 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
