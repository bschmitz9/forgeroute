import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];

  constructor() {
    // In a real application, this would load from products.json
    // For now, we'll use sample data
    this.products = this.getSampleProducts();
  }

  getAllProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: string): Observable<Product | undefined> {
    const product = this.products.find(p => p.id === id);
    return of(product);
  }

  getFeaturedProducts(): Observable<Product[]> {
    const featured = this.products.filter(p => p.featured);
    return of(featured);
  }

  private getSampleProducts(): Product[] {
    return [
      {
        id: 'intentbrief',
        name: 'IntentBrief',
        tagline: 'AI-Powered Product Requirements',
        description: 'IntentBrief transforms your product ideas into detailed, actionable requirements documents using advanced AI. Create comprehensive product briefs in minutes, not hours.',
        category: 'mobile',
        platforms: ['iOS', 'Android'],
        icon: '/assets/images/products/intentbrief-icon.png',
        screenshots: [
          '/assets/images/products/intentbrief-1.png',
          '/assets/images/products/intentbrief-2.png'
        ],
        features: [
          'AI-generated product requirements',
          'Collaborative editing',
          'Export to multiple formats',
          'Template library',
          'Team workspace management'
        ],
        techStack: ['Swift', 'Xcode', 'UIKit', 'OpenAI', 'Node.js', 'PostgreSQL'],
        websiteUrl: 'https://intentbrief.app/',
        appStoreUrl: 'https://intentbrief.app/',
        playStoreUrl: 'https://intentbrief.app/',
        demoAvailable: true,
        featured: true
      },
      {
        id: 'billbeacon',
        name: 'BillBeacon',
        tagline: 'Smart Bill Tracking & Reminders',
        description: 'Never miss a bill payment again. BillBeacon helps you track all your recurring bills, get timely reminders, and manage your subscriptions in one place.',
        category: 'mobile',
        platforms: ['iOS', 'Android'],
        icon: '/assets/images/products/billbeacon-icon.png',
        screenshots: [
          '/assets/images/products/billbeacon-1.png',
          '/assets/images/products/billbeacon-2.png'
        ],
        features: [
          'Automated bill tracking',
          'Smart payment reminders',
          'Subscription management',
          'Spending analytics',
          'Multi-device sync'
        ],
        techStack: ['Swift', 'Xcode', 'UIKit', 'Firebase', 'Cloud Functions'],
        websiteUrl: 'https://billbeacon.app/',
        appStoreUrl: 'https://billbeacon.app/',
        playStoreUrl: 'https://billbeacon.app/',
        demoAvailable: true,
        featured: true
      },
      {
        id: 'leadory',
        name: 'Leadory',
        tagline: 'AI-Powered Lead Generation',
        description: 'Leadory leverages artificial intelligence to help businesses identify, qualify, and convert high-quality leads. Automate your sales pipeline and grow faster.',
        category: 'web',
        platforms: ['Web'],
        icon: '/assets/images/products/leadory-icon.png',
        screenshots: [
          '/assets/images/products/leadory-1.png',
          '/assets/images/products/leadory-2.png'
        ],
        features: [
          'AI-powered lead scoring',
          'Automated outreach campaigns',
          'CRM integration',
          'Real-time analytics',
          'Lead enrichment'
        ],
        techStack: ['Angular', 'RxJS', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL'],
        websiteUrl: 'https://www.leadory.ai/',
        demoAvailable: true,
        featured: true
      }
    ];
  }
}
