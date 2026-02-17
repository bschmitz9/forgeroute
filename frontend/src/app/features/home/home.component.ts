import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/product.model';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 md:py-24 lg:py-32">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Build the Future with <span class="text-primary-200">ForgeRoute Labs</span>
          </h1>
          <p class="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-primary-100 px-4">
            Expert mobile and web development services. We build exceptional applications that drive growth and transform businesses.
          </p>
          <!-- Buttons temporarily removed
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <a routerLink="/contact"
               class="bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-primary-50 transition-colors text-center">
              Get in Touch
            </a>
            <a routerLink="/products"
               class="bg-primary-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-primary-400 transition-colors border-2 border-white text-center">
              View Our Work
            </a>
          </div>
          -->
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-4">Why Choose ForgeRoute Labs?</h2>
          <p class="text-lg sm:text-xl text-gray-600 px-4">Expertise you can trust, innovation you can count on</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <!-- Feature 1 -->
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Mobile Excellence</h3>
            <p class="text-gray-600">Native iOS and Android apps built with cutting-edge technology and best practices.</p>
          </div>

          <!-- Feature 2 -->
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Innovation First</h3>
            <p class="text-gray-600">Leveraging the latest technologies to create solutions that stand out in the market.</p>
          </div>

          <!-- Feature 3 -->
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Fast Delivery</h3>
            <p class="text-gray-600">Agile development process ensuring rapid time-to-market without compromising quality.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products Section (temporarily commented out)
    <section class="py-12 sm:py-16 md:py-20">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-4">Featured Products</h2>
          <p class="text-lg sm:text-xl text-gray-600 px-4">Discover our latest and most popular solutions</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          @for (product of featuredProducts; track product.id) {
            <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
              @if (product.id === 'intentbrief') {
                <div class="bg-gradient-to-br from-orange-500 via-pink-500 to-fuchsia-600 h-48 flex items-center justify-center">
                  <div class="text-white text-center px-4">
                    <h3 class="text-2xl font-bold">{{product.name}}</h3>
                    <p class="mt-2">{{product.tagline}}</p>
                  </div>
                </div>
                <div class="p-6">
                  <p class="text-gray-600 mb-4">{{product.description}}</p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    @for (platform of product.platforms; track platform) {
                      <span class="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">{{platform}}</span>
                    }
                  </div>
                  <a [href]="product.websiteUrl" target="_blank" rel="noopener"
                     class="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold">
                    Visit Website
                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </a>
                </div>
              } @else if (product.id === 'billbeacon') {
                <div class="bg-gradient-to-br from-blue-900 to-blue-800 h-48 flex items-center justify-center">
                  <div class="text-white text-center px-4">
                    <h3 class="text-2xl font-bold">{{product.name}}</h3>
                    <p class="mt-2">{{product.tagline}}</p>
                  </div>
                </div>
                <div class="p-6">
                  <p class="text-gray-600 mb-4">{{product.description}}</p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    @for (platform of product.platforms; track platform) {
                      <span class="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm">{{platform}}</span>
                    }
                  </div>
                  <a [href]="product.websiteUrl" target="_blank" rel="noopener"
                     class="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold">
                    Visit Website
                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </a>
                </div>
              } @else if (product.id === 'leadory') {
                <div class="bg-gradient-to-br from-blue-600 to-indigo-700 h-48 flex items-center justify-center relative overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent"></div>
                  <div class="text-white text-center px-4 relative z-10">
                    <h3 class="text-2xl font-bold">{{product.name}}</h3>
                    <p class="mt-2">{{product.tagline}}</p>
                  </div>
                </div>
                <div class="p-6">
                  <p class="text-gray-600 mb-4">{{product.description}}</p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    @for (platform of product.platforms; track platform) {
                      <span class="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm">{{platform}}</span>
                    }
                  </div>
                  <a [href]="product.websiteUrl" target="_blank" rel="noopener"
                     class="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                    Visit Website
                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </a>
                </div>
              } @else if (product.id === 'cremationbridge') {
                <div class="bg-gradient-to-br from-gray-700 to-gray-600 h-48 flex items-center justify-center relative overflow-hidden">
                  <div class="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">Coming Soon</div>
                  <div class="text-white text-center px-4 relative z-10">
                    <h3 class="text-2xl font-bold">{{product.name}}</h3>
                    <p class="mt-2">{{product.tagline}}</p>
                  </div>
                </div>
                <div class="p-6">
                  <p class="text-gray-600 mb-4">{{product.description}}</p>
                </div>
              } @else {
                <div class="bg-gradient-to-br from-primary-500 to-primary-700 h-48 flex items-center justify-center">
                  <div class="text-white text-center px-4">
                    <h3 class="text-2xl font-bold">{{product.name}}</h3>
                    <p class="mt-2">{{product.tagline}}</p>
                  </div>
                </div>
                <div class="p-6">
                  <p class="text-gray-600 mb-4">{{product.description}}</p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    @for (platform of product.platforms; track platform) {
                      <span class="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">{{platform}}</span>
                    }
                  </div>
                  <a [routerLink]="['/products', product.id]"
                     class="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold">
                    Learn More
                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </a>
                </div>
              }
            </div>
          }
        </div>

        <div class="text-center mt-12">
          <a routerLink="/products"
             class="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors">
            View All Products
          </a>
        </div>
      </div>
    </section>
    -->

    <!-- CTA Section (temporarily commented out)
    <section class="bg-primary-600 text-white py-12 sm:py-16 md:py-20">
      <div class="container mx-auto px-4 sm:px-6 text-center">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-4">Ready to Build Your Next Project?</h2>
        <p class="text-lg sm:text-xl mb-6 md:mb-8 text-primary-100 px-4">Let's discuss your needs and bring your vision to life.</p>
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <a routerLink="/contact"
             class="bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-primary-50 transition-colors text-center">
            Start Your Project
          </a>
          <a routerLink="/about"
             class="bg-primary-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-primary-400 transition-colors border-2 border-white text-center">
            Learn More
          </a>
        </div>
      </div>
    </section>
    -->
  `
})
export class HomeComponent implements OnInit {
  private productService = inject(ProductService);
  private seoService = inject(SeoService);
  featuredProducts: Product[] = [];

  ngOnInit() {
    this.seoService.updateTags({
      title: 'Home',
      description: 'Expert mobile and web development services. We build exceptional iOS, Android, and web applications that drive growth and transform businesses worldwide.',
      keywords: 'mobile app development, iOS development, Android development, web development, app development services, custom software, ForgeRoute Labs',
      url: 'https://forgeroutelabs.com/'
    });

    // Add organization structured data
    this.seoService.addStructuredData({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'ForgeRoute Labs',
      'url': 'https://forgeroutelabs.com',
      'logo': 'https://forgeroutelabs.com/assets/images/logo.png',
      'description': 'Expert mobile and web development services. We build exceptional applications that drive growth and transform businesses.',
      'email': 'hello@forgeroute.com',
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': 'US'
      },
      'sameAs': [
        'https://twitter.com/forgeroute',
        'https://github.com/forgeroute',
        'https://linkedin.com/company/forgeroute'
      ]
    });

    this.productService.getFeaturedProducts().subscribe(products => {
      this.featuredProducts = products;
    });
  }
}
