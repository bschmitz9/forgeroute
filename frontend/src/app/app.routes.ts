import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProductsComponent } from './features/products/products.component';
import { ProductDetailComponent } from './features/products/product-detail/product-detail.component';
import { ContactComponent } from './features/contact/contact.component';
import { DemoComponent } from './features/demo/demo.component';
import { AboutComponent } from './features/about/about.component';
import { BookingWidgetComponent } from './features/booking-widget/booking-widget.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'ForgeRoute Labs - Build Your Next App' },
  { path: 'products', component: ProductsComponent, title: 'Our Products - ForgeRoute Labs' },
  { path: 'products/:id', component: ProductDetailComponent, title: 'Product Details - ForgeRoute Labs' },
  { path: 'contact', component: ContactComponent, title: 'Contact Us - ForgeRoute Labs' },
  { path: 'demo', component: DemoComponent, title: 'Request a Demo - ForgeRoute Labs' },
  { path: 'about', component: AboutComponent, title: 'About Us - ForgeRoute Labs' },
  { path: 'booking-widget', component: BookingWidgetComponent, title: 'Booking Widget - ForgeRoute Labs' },
  { path: '**', redirectTo: '' }
];
