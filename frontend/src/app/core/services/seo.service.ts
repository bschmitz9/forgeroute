import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private meta = inject(Meta);
  private titleService = inject(Title);

  private readonly baseUrl = 'https://forgeroute.com'; // Update with actual production URL
  private readonly defaultImage = `${this.baseUrl}/assets/images/og-default.jpg`;
  private readonly siteName = 'ForgeRoute Labs';

  updateTags(config: SeoConfig): void {
    // Set page title
    const fullTitle = config.title
      ? `${config.title} | ${this.siteName}`
      : this.siteName;
    this.titleService.setTitle(fullTitle);

    // Standard meta tags
    this.meta.updateTag({ name: 'description', content: config.description });

    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }

    // Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: config.title || this.siteName });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:type', content: config.type || 'website' });
    this.meta.updateTag({ property: 'og:url', content: config.url || this.baseUrl });
    this.meta.updateTag({ property: 'og:image', content: config.image || this.defaultImage });
    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });

    // Twitter Card tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title || this.siteName });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.image || this.defaultImage });

    // Additional SEO tags
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: this.siteName });
    this.meta.updateTag({ httpEquiv: 'Content-Type', content: 'text/html; charset=utf-8' });
    this.meta.updateTag({ name: 'viewport', content: 'width=device-width, initial-scale=1' });
  }

  addStructuredData(data: any): void {
    let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(data);
  }

  removeStructuredData(): void {
    const script = document.querySelector('script[type="application/ld+json"]');
    if (script) {
      script.remove();
    }
  }
}
