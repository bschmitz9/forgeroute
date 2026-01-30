export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: 'mobile' | 'web' | 'software';
  platforms?: ('iOS' | 'Android' | 'Web')[];
  icon: string;
  screenshots: string[];
  features: string[];
  techStack: string[];
  appStoreUrl?: string;
  playStoreUrl?: string;
  websiteUrl?: string;
  demoAvailable: boolean;
  featured: boolean;
  comingSoon?: boolean;
}
