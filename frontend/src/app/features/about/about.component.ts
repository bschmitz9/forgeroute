import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 sm:py-20">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            We Build Digital <span class="text-primary-200">Excellence</span>
          </h1>
          <p class="text-lg sm:text-xl md:text-2xl text-primary-100 px-4">
            Transforming ideas into powerful mobile and web applications since day one.
          </p>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-12 sm:py-16 bg-white">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <div class="text-center">
            <div class="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-600 mb-2">50+</div>
            <div class="text-sm sm:text-base text-gray-600 font-medium">Projects Delivered</div>
          </div>
          <div class="text-center">
            <div class="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-600 mb-2">98%</div>
            <div class="text-sm sm:text-base text-gray-600 font-medium">Client Satisfaction</div>
          </div>
          <div class="text-center">
            <div class="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-600 mb-2">5+</div>
            <div class="text-sm sm:text-base text-gray-600 font-medium">Years Experience</div>
          </div>
          <div class="text-center">
            <div class="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-600 mb-2">24/7</div>
            <div class="text-sm sm:text-base text-gray-600 font-medium">Support Available</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section class="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="max-w-5xl mx-auto">
          <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 class="text-4xl font-bold mb-6">Our Story</h2>
              <p class="text-lg text-gray-700 mb-4">
                ForgeRoute Labs was founded with a simple mission: to help businesses succeed through
                exceptional software development. What started as a passion project has grown into a
                full-service development agency trusted by companies worldwide.
              </p>
              <p class="text-lg text-gray-700 mb-4">
                We specialize in creating custom iOS, Android, and web applications that don't just
                meet expectations—they exceed them. Our team combines technical expertise with
                creative problem-solving to deliver solutions that drive real business results.
              </p>
              <p class="text-lg text-gray-700">
                Every project we take on is an opportunity to push boundaries, learn something new,
                and create software that makes a difference.
              </p>
            </div>
            <div class="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold mb-2">Quality First</h3>
                    <p class="text-primary-100">We never compromise on code quality or user experience.</p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold mb-2">Fast Execution</h3>
                    <p class="text-primary-100">Agile methodology ensures rapid delivery without sacrificing quality.</p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold mb-2">Client Partnership</h3>
                    <p class="text-primary-100">Your success is our success. We're in this together.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What We Do -->
    <section class="py-12 sm:py-16 md:py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-4">What We Do Best</h2>
            <p class="text-lg sm:text-xl text-gray-600 px-4">Full-stack development services tailored to your needs</p>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div class="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div class="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-4">Mobile Development</h3>
              <p class="text-gray-600 mb-4">Native iOS and Android apps built with Swift, Kotlin, React Native, and Flutter.</p>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Native iOS Apps
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Android Applications
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Cross-Platform Solutions
                </li>
              </ul>
            </div>

            <div class="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div class="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-4">Web Applications</h3>
              <p class="text-gray-600 mb-4">Modern, responsive web apps using React, Angular, Vue, and Node.js.</p>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Single Page Apps (SPA)
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Progressive Web Apps
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Enterprise Solutions
                </li>
              </ul>
            </div>

            <div class="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div class="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-4">Backend & APIs</h3>
              <p class="text-gray-600 mb-4">Scalable backend systems, RESTful APIs, and cloud infrastructure.</p>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  RESTful API Development
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Database Architecture
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Cloud Deployment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Our Core Values</h2>
            <p class="text-lg sm:text-xl text-gray-300">The principles that guide everything we do</p>
          </div>

          <div class="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div class="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl">
              <h3 class="text-2xl font-bold mb-3 text-white">Transparency</h3>
              <p class="text-gray-300">Clear communication, honest timelines, and no hidden costs. You'll always know exactly where your project stands.</p>
            </div>
            <div class="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl">
              <h3 class="text-2xl font-bold mb-3 text-white">Innovation</h3>
              <p class="text-gray-300">We stay ahead of the curve with the latest technologies and best practices to give you a competitive edge.</p>
            </div>
            <div class="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl">
              <h3 class="text-2xl font-bold mb-3 text-white">Craftsmanship</h3>
              <p class="text-gray-300">Every line of code is written with care. We take pride in building software that's elegant, efficient, and maintainable.</p>
            </div>
            <div class="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl">
              <h3 class="text-2xl font-bold mb-3 text-white">Long-term Partnership</h3>
              <p class="text-gray-300">We're not just contractors—we're partners in your success. Many of our clients have worked with us for years.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-12 sm:py-16 md:py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4">Let's Build Something Great Together</h2>
          <p class="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 px-4">
            Whether you're a startup with a bold idea or an enterprise looking to innovate,
            we're ready to help you succeed.
          </p>
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <a routerLink="/contact"
               class="bg-primary-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-primary-700 transition-colors shadow-lg text-center">
              Start Your Project
            </a>
            <a routerLink="/products"
               class="bg-gray-100 text-gray-800 px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-200 transition-colors text-center">
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit() {
    this.seoService.updateTags({
      title: 'About Us',
      description: 'Learn about ForgeRoute Labs - a team of expert developers building innovative mobile and web applications. 50+ projects delivered with 98% client satisfaction.',
      keywords: 'about ForgeRoute Labs, development team, mobile app developers, web developers, software development company',
      url: 'https://forgeroute.com/about'
    });
  }
}
