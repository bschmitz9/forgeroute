import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';
import { Product } from '../../../core/models/product.model';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    @if (product) {
      <div class="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <a routerLink="/products" class="text-primary-600 hover:text-primary-700 mb-4 inline-block">← Back to Products</a>

        @if (product.id === 'intentbrief') {
          <!-- IntentBrief branded header -->
          <div class="bg-gradient-to-br from-orange-500 via-pink-500 to-fuchsia-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 mb-6 sm:mb-8 text-white">
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">{{product.name}}</h1>
            <p class="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6">{{product.tagline}}</p>
            <a [href]="product.websiteUrl" target="_blank" rel="noopener"
               class="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              Visit IntentBrief →
            </a>
          </div>
        } @else if (product.id === 'billbeacon') {
          <!-- BillBeacon branded header -->
          <div class="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 mb-8 text-white">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">{{product.name}}</h1>
            <p class="text-xl md:text-2xl mb-6">{{product.tagline}}</p>
            <a [href]="product.websiteUrl" target="_blank" rel="noopener"
               class="inline-block bg-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors">
              Visit BillBeacon →
            </a>
          </div>
        } @else if (product.id === 'leadory') {
          <!-- Leadory branded header -->
          <div class="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 mb-8 text-white relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent"></div>
            <div class="relative z-10">
              <h1 class="text-4xl md:text-5xl font-bold mb-4">{{product.name}}</h1>
              <p class="text-xl md:text-2xl mb-6">{{product.tagline}}</p>
              <a [href]="product.websiteUrl" target="_blank" rel="noopener"
                 class="inline-block bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors">
                Visit Leadory →
              </a>
            </div>
          </div>
        } @else {
          <!-- Default header -->
          <h1 class="text-4xl font-bold mb-4">{{product.name}}</h1>
          <p class="text-xl text-gray-600 mb-8">{{product.tagline}}</p>
        }

        <div class="prose max-w-none mb-8">
          <p class="text-lg text-gray-700">{{product.description}}</p>
        </div>

        <div class="mb-8">
          <h2 class="text-2xl font-bold mb-4">Key Features</h2>
          <ul class="grid md:grid-cols-2 gap-3">
            @for (feature of product.features; track feature) {
              <li class="flex items-start">
                <svg class="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">{{feature}}</span>
              </li>
            }
          </ul>
        </div>

        <div class="mb-8">
          <h2 class="text-2xl font-bold mb-4">Technology Stack</h2>
          <div class="flex flex-wrap gap-3">
            @for (tech of product.techStack; track tech) {
              <span class="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium">{{tech}}</span>
            }
          </div>
        </div>

        <div class="bg-gray-50 rounded-xl p-8 mt-12">
          <h2 class="text-2xl font-bold mb-4">Interested in Similar Work?</h2>
          <p class="text-gray-600 mb-6">We can build a custom solution tailored to your specific needs.</p>
          <a routerLink="/contact" class="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 inline-block font-semibold">
            Start Your Project
          </a>
        </div>
      </div>
    } @else {
      <div class="container mx-auto px-4 py-12">
        <p>Product not found</p>
      </div>
    }
  `
})
export class ProductDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private seoService = inject(SeoService);
  product: Product | undefined;

  ngOnInit() {
    // Subscribe to route parameter changes to update when navigating between products
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadProduct(id);
      }
    });
  }

  private loadProduct(id: string): void {
    this.productService.getProductById(id).subscribe(product => {
      this.product = product;

      if (product) {
        // Scroll to top when product changes
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Update SEO tags with product-specific information
        this.seoService.updateTags({
          title: product.name,
          description: product.description,
          keywords: `${product.name}, ${product.platforms?.join(', ') || ''}, ${product.category}, ${product.techStack?.join(', ') || ''}`,
          url: `https://forgeroute.com/products/${product.id}`,
          type: 'product'
        });

        // Add product structured data
        this.seoService.addStructuredData({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          'name': product.name,
          'description': product.description,
          'applicationCategory': product.category === 'mobile' ? 'MobileApplication' : 'WebApplication',
          'operatingSystem': product.platforms?.join(', ') || '',
          'offers': {
            '@type': 'Offer',
            'price': '0',
            'priceCurrency': 'USD'
          },
          'author': {
            '@type': 'Organization',
            'name': 'ForgeRoute Labs'
          }
        });
      }
    });
  }
}
