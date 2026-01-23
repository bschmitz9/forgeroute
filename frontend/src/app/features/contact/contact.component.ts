import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { ContactForm } from '../../core/models/contact.model';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div class="max-w-2xl mx-auto">
        <h1 class="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Contact Us</h1>
        <p class="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">Have a question or want to work together? We'd love to hear from you.</p>

        @if (submitSuccess) {
          <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
            <p class="font-semibold">Thank you for contacting us!</p>
            <p>We'll get back to you as soon as possible.</p>
          </div>
        }

        @if (submitError) {
          <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
            <p class="font-semibold">Oops! Something went wrong.</p>
            <p>{{submitError}}</p>
          </div>
        }

        <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
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
              [class.border-red-500]="contactForm.get('name')?.invalid && contactForm.get('name')?.touched"
            />
            @if (contactForm.get('name')?.invalid && contactForm.get('name')?.touched) {
              <p class="text-red-500 text-sm mt-1">Name is required (min 2 characters)</p>
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
              [class.border-red-500]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched"
            />
            @if (contactForm.get('email')?.invalid && contactForm.get('email')?.touched) {
              <p class="text-red-500 text-sm mt-1">Please enter a valid email address</p>
            }
          </div>

          <!-- Company -->
          <div>
            <label for="company" class="block text-sm font-medium text-gray-700 mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              formControlName="company"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <!-- Phone -->
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              formControlName="phone"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <!-- Message -->
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
              Message <span class="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              formControlName="message"
              rows="6"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              [class.border-red-500]="contactForm.get('message')?.invalid && contactForm.get('message')?.touched"
            ></textarea>
            @if (contactForm.get('message')?.invalid && contactForm.get('message')?.touched) {
              <p class="text-red-500 text-sm mt-1">Message is required (min 10 characters)</p>
            }
          </div>

          <!-- Submit Button -->
          <div>
            <button
              type="submit"
              [disabled]="contactForm.invalid || isSubmitting"
              class="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium text-lg"
            >
              @if (isSubmitting) {
                <span>Sending...</span>
              } @else {
                <span>Send Message</span>
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  `
})
export class ContactComponent implements OnInit {
  private fb = inject(FormBuilder);
  private apiService = inject(ApiService);
  private seoService = inject(SeoService);

  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      phone: [''],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit() {
    this.seoService.updateTags({
      title: 'Contact Us',
      description: 'Get in touch with ForgeRoute Labs to discuss your mobile or web development project. We\'re here to help bring your ideas to life.',
      keywords: 'contact ForgeRoute Labs, get a quote, project inquiry, app development contact, software development inquiry',
      url: 'https://forgeroute.com/contact'
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitSuccess = false;
      this.submitError = '';

      const formData: ContactForm = this.contactForm.value;

      this.apiService.submitContactForm(formData).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.submitSuccess = true;
          this.contactForm.reset();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        error: (error) => {
          this.isSubmitting = false;
          this.submitError = error.error?.error?.message || 'Failed to send message. Please try again.';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }
  }
}
