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
            <span class="text-primary-200">Test</span>
          </h1>
        </div>
      </div>
    </section>
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
