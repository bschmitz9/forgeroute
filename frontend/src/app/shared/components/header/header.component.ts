import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <a routerLink="/" class="text-2xl font-bold text-primary-600">
            ForgeRoute <span class="text-gray-600">Labs</span>
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <a routerLink="/" routerLinkActive="text-primary-600" [routerLinkActiveOptions]="{exact: true}"
               class="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Home
            </a>
            <a routerLink="/products" routerLinkActive="text-primary-600"
               class="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Products
            </a>
            <a routerLink="/about" routerLinkActive="text-primary-600"
               class="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              About
            </a>
            <a routerLink="/contact" routerLinkActive="text-primary-600"
               class="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Contact
            </a>
            <a routerLink="/contact"
               class="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium">
              Get Started
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button (click)="toggleMobileMenu()" class="md:hidden p-2 rounded-md hover:bg-gray-100"
                  aria-label="Toggle menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              @if (!mobileMenuOpen) {
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              } @else {
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              }
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation -->
        @if (mobileMenuOpen) {
          <div class="md:hidden mt-4 pb-4 space-y-3">
            <a routerLink="/" (click)="closeMobileMenu()" routerLinkActive="text-primary-600" [routerLinkActiveOptions]="{exact: true}"
               class="block text-gray-700 hover:text-primary-600 font-medium transition-colors py-2">
              Home
            </a>
            <a routerLink="/products" (click)="closeMobileMenu()" routerLinkActive="text-primary-600"
               class="block text-gray-700 hover:text-primary-600 font-medium transition-colors py-2">
              Products
            </a>
            <a routerLink="/about" (click)="closeMobileMenu()" routerLinkActive="text-primary-600"
               class="block text-gray-700 hover:text-primary-600 font-medium transition-colors py-2">
              About
            </a>
            <a routerLink="/contact" (click)="closeMobileMenu()" routerLinkActive="text-primary-600"
               class="block text-gray-700 hover:text-primary-600 font-medium transition-colors py-2">
              Contact
            </a>
            <a routerLink="/contact" (click)="closeMobileMenu()"
               class="block bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium text-center">
              Get Started
            </a>
          </div>
        }
      </nav>
    </header>
  `
})
export class HeaderComponent {
  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}
