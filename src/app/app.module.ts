import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LocationComponent } from './components/location/location.component';
import { ManagementComponent } from './components/management/management.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { LifeComponent } from './components/life/life.component';
// // import { ProductsComponent } from './components/products/products.component';
// import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocationComponent,
    ManagementComponent,
    SliderComponent,
    FooterComponent,
    TestimonialComponent,
    LifeComponent,
    // ProductsComponent,
    // LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
