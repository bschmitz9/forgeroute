import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="bg-gray-900 text-gray-300 mt-auto">
      <div class="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <!-- Company Info -->
          <div>
            <h3 class="text-white text-xl font-bold mb-4">ForgeRoute Labs</h3>
            <p class="text-sm mb-4">
              Building innovative mobile and web applications for businesses worldwide.
            </p>
          </div>

          <!-- Products -->
          <div>
            <h4 class="text-white font-semibold mb-4">Products</h4>
            <ul class="space-y-2 text-sm">
              <li><a routerLink="/products" class="hover:text-white transition-colors">All Products</a></li>
              <li><a routerLink="/products/intentbrief" class="hover:text-white transition-colors">IntentBrief</a></li>
              <li><a routerLink="/products/billbeacon" class="hover:text-white transition-colors">BillBeacon</a></li>
              <li><a routerLink="/products/leadory" class="hover:text-white transition-colors">Leadory</a></li>
            </ul>
          </div>

          <!-- Company -->
          <div>
            <h4 class="text-white font-semibold mb-4">Company</h4>
            <ul class="space-y-2 text-sm">
              <li><a routerLink="/about" class="hover:text-white transition-colors">About Us</a></li>
              <li><a routerLink="/contact" class="hover:text-white transition-colors">Contact</a></li>
              <li><a routerLink="/contact" class="hover:text-white transition-colors">Hire Us</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h4 class="text-white font-semibold mb-4">Get in Touch</h4>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="mailto:hello@forgeroutelabs.com" class="hover:text-white transition-colors">
                  hello&#64;forgeroutelabs.com
                </a>
              </li>
              <li class="flex space-x-4 mt-4">
                <a href="#" class="hover:text-white transition-colors" aria-label="Twitter">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a href="#" class="hover:text-white transition-colors" aria-label="GitHub">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path>
                  </svg>
                </a>
                <a href="#" class="hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {{currentYear}} ForgeRoute Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
