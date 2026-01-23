import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/product.model';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h1 class="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Our Products</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        @for (product of products; track product.id) {
          <div class="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
            @if (product.id === 'intentbrief') {
              <!-- IntentBrief - Purple gradient -->
              <div class="bg-gradient-to-br from-orange-500 via-pink-500 to-fuchsia-600 p-6">
                <h3 class="text-2xl font-bold mb-2 text-white">{{product.name}}</h3>
                <p class="text-white/90">{{product.tagline}}</p>
              </div>
              <div class="p-6">
                <p class="text-gray-600 mb-4">{{product.description}}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  @for (platform of product.platforms; track platform) {
                    <span class="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">{{platform}}</span>
                  }
                </div>
                <a [href]="product.websiteUrl" target="_blank" rel="noopener" class="text-purple-600 hover:text-purple-700 font-semibold">
                  Visit Website →
                </a>
              </div>
            } @else if (product.id === 'billbeacon') {
              <!-- BillBeacon - Navy with teal -->
              <div class="bg-gradient-to-br from-blue-900 to-blue-800 p-6">
                <h3 class="text-2xl font-bold mb-2 text-white">{{product.name}}</h3>
                <p class="text-white/90">{{product.tagline}}</p>
              </div>
              <div class="p-6">
                <p class="text-gray-600 mb-4">{{product.description}}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  @for (platform of product.platforms; track platform) {
                    <span class="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm">{{platform}}</span>
                  }
                </div>
                <a [href]="product.websiteUrl" target="_blank" rel="noopener" class="text-teal-600 hover:text-teal-700 font-semibold">
                  Visit Website →
                </a>
              </div>
            } @else if (product.id === 'leadory') {
              <!-- Leadory - Scout blue with neon -->
              <div class="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent"></div>
                <h3 class="text-2xl font-bold mb-2 text-white relative z-10">{{product.name}}</h3>
                <p class="text-white/90 relative z-10">{{product.tagline}}</p>
              </div>
              <div class="p-6">
                <p class="text-gray-600 mb-4">{{product.description}}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  @for (platform of product.platforms; track platform) {
                    <span class="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm">{{platform}}</span>
                  }
                </div>
                <a [href]="product.websiteUrl" target="_blank" rel="noopener" class="text-blue-600 hover:text-blue-700 font-semibold">
                  Visit Website →
                </a>
              </div>
            } @else {
              <!-- Default styling -->
              <div class="p-6">
                <h3 class="text-2xl font-bold mb-2">{{product.name}}</h3>
                <p class="text-gray-600 mb-4">{{product.tagline}}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  @for (platform of product.platforms; track platform) {
                    <span class="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">{{platform}}</span>
                  }
                </div>
                <a [routerLink]="['/products', product.id]" class="text-primary-600 hover:text-primary-700 font-semibold">
                  View Details →
                </a>
              </div>
            }
          </div>
        }
      </div>
    </div>
  `
})
export class ProductsComponent implements OnInit {
  private productService = inject(ProductService);
  private seoService = inject(SeoService);
  products: Product[] = [];

  ngOnInit() {
    this.seoService.updateTags({
      title: 'Our Products',
      description: 'Explore our portfolio of innovative mobile and web applications including IntentBrief, BillBeacon, and Leadory. See what we can build for your business.',
      keywords: 'mobile apps, iOS apps, Android apps, web applications, IntentBrief, BillBeacon, Leadory, portfolio, case studies',
      url: 'https://forgeroute.com/products'
    });

    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }
}
