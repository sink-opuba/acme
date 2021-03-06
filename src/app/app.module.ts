import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent, WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ProductModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
