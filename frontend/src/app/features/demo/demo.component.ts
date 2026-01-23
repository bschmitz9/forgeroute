import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { ProductService } from '../../core/services/product.service';
import { DemoRequest } from '../../core/models/demo.model';
import { Product } from '../../core/models/product.model';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container mx-auto px-4 py-12">
      <div class="max-w-2xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">Request a Demo</h1>
        <p class="text-lg text-gray-600 mb-8">Schedule a personalized demo of our products and see how we can help your business grow.</p>

        @if (submitSuccess) {
          <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
            <p class="font-semibold">Demo request received!</p>
            <p>We'll contact you soon to schedule your personalized demo.</p>
          </div>
        }

        @if (submitError) {
          <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
            <p class="font-semibold">Oops! Something went wrong.</p>
            <p>{{submitError}}</p>
          </div>
        }

        <form [formGroup]="demoForm" (ngSubmit)="onSubmit()" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Name -->
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                Name <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                formControlName="name"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                [class.border-red-500]="demoForm.get('name')?.invalid && demoForm.get('name')?.touched"
              />
              @if (demoForm.get('name')?.invalid && demoForm.get('name')?.touched) {
                <p class="text-red-500 text-sm mt-1">Name is required</p>
              }
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                Email <span class="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                formControlName="email"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                [class.border-red-500]="demoForm.get('email')?.invalid && demoForm.get('email')?.touched"
              />
              @if (demoForm.get('email')?.invalid && demoForm.get('email')?.touched) {
                <p class="text-red-500 text-sm mt-1">Valid email is required</p>
              }
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Company -->
            <div>
              <label for="company" class="block text-sm font-medium text-gray-700 mb-2">
                Company <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company"
                formControlName="company"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                [class.border-red-500]="demoForm.get('company')?.invalid && demoForm.get('company')?.touched"
              />
              @if (demoForm.get('company')?.invalid && demoForm.get('company')?.touched) {
                <p class="text-red-500 text-sm mt-1">Company is required</p>
              }
            </div>

            <!-- Job Title -->
            <div>
              <label for="jobTitle" class="block text-sm font-medium text-gray-700 mb-2">
                Job Title
              </label>
              <input
                type="text"
                id="jobTitle"
                formControlName="jobTitle"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          <!-- Phone -->
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
              Phone <span class="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              formControlName="phone"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              [class.border-red-500]="demoForm.get('phone')?.invalid && demoForm.get('phone')?.touched"
            />
            @if (demoForm.get('phone')?.invalid && demoForm.get('phone')?.touched) {
              <p class="text-red-500 text-sm mt-1">Phone number is required</p>
            }
          </div>

          <!-- Product Interest -->
          <div>
            <label for="productInterest" class="block text-sm font-medium text-gray-700 mb-2">
              Which product are you interested in? <span class="text-red-500">*</span>
            </label>
            <select
              id="productInterest"
              formControlName="productInterest"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              [class.border-red-500]="demoForm.get('productInterest')?.invalid && demoForm.get('productInterest')?.touched"
            >
              <option value="">Select a product</option>
              @for (product of products; track product.id) {
                <option [value]="product.name">{{product.name}}</option>
              }
              <option value="General Inquiry">General Inquiry</option>
            </select>
            @if (demoForm.get('productInterest')?.invalid && demoForm.get('productInterest')?.touched) {
              <p class="text-red-500 text-sm mt-1">Please select a product</p>
            }
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Company Size -->
            <div>
              <label for="companySize" class="block text-sm font-medium text-gray-700 mb-2">
                Company Size
              </label>
              <select
                id="companySize"
                formControlName="companySize"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Select size</option>
                <option value="SMALL">1-50 employees</option>
                <option value="MEDIUM">51-200 employees</option>
                <option value="LARGE">201-1000 employees</option>
                <option value="ENTERPRISE">1000+ employees</option>
              </select>
            </div>

            <!-- Preferred Time -->
            <div>
              <label for="preferredTime" class="block text-sm font-medium text-gray-700 mb-2">
                Preferred Time
              </label>
              <select
                id="preferredTime"
                formControlName="preferredTime"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Select time</option>
                <option value="MORNING">Morning (9am-12pm)</option>
                <option value="AFTERNOON">Afternoon (12pm-5pm)</option>
                <option value="EVENING">Evening (5pm-8pm)</option>
              </select>
            </div>
          </div>

          <!-- Message -->
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
              Additional Comments
            </label>
            <textarea
              id="message"
              formControlName="message"
              rows="4"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <div>
            <button
              type="submit"
              [disabled]="demoForm.invalid || isSubmitting"
              class="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium text-lg"
            >
              @if (isSubmitting) {
                <span>Submitting...</span>
              } @else {
                <span>Request Demo</span>
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  `
})
export class DemoComponent implements OnInit {
  private fb = inject(FormBuilder);
  private apiService = inject(ApiService);
  private productService = inject(ProductService);
  private seoService = inject(SeoService);

  demoForm: FormGroup;
  products: Product[] = [];
  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  constructor() {
    this.demoForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      company: ['', [Validators.required, Validators.minLength(2)]],
      jobTitle: [''],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      productInterest: ['', Validators.required],
      companySize: [''],
      preferredTime: [''],
      message: [''],
    });
  }

  ngOnInit() {
    this.seoService.updateTags({
      title: 'Request a Demo',
      description: 'Schedule a personalized demo of our products and see how ForgeRoute Labs can help your business grow with custom mobile and web applications.',
      keywords: 'demo request, schedule demo, product demo, consultation, app demo',
      url: 'https://forgeroute.com/demo'
    });

    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  onSubmit() {
    if (this.demoForm.valid) {
      this.isSubmitting = true;
      this.submitSuccess = false;
      this.submitError = '';

      const formData: DemoRequest = this.demoForm.value;

      this.apiService.submitDemoRequest(formData).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.submitSuccess = true;
          this.demoForm.reset();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        error: (error) => {
          this.isSubmitting = false;
          this.submitError = error.error?.error?.message || 'Failed to submit demo request. Please try again.';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }
  }
}
