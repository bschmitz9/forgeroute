import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-booking-widget',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="container mx-auto px-4 py-12">
      <!-- Outlander -->
      <section class="mb-12">
        <rf-booking-widget
          rental-id="1"
          resort-alias="mooselake"
          primary-color="#5D2E2E">
        </rf-booking-widget>
      </section>

      <!-- RV Site 1 -->
      <section class="mb-12">
        <rf-booking-widget
          rental-id="308"
          resort-alias="mooselake"
          primary-color="#5D2E2E">
        </rf-booking-widget>
      </section>

      <!-- Tent Site 1 -->
      <section class="mb-12">
        <rf-booking-widget
          rental-id="360"
          resort-alias="mooselake"
          primary-color="#5D2E2E">
        </rf-booking-widget>
      </section>

      <!-- Greeny -->
      <section class="mb-12">
        <rf-booking-widget
          rental-id="364"
          resort-alias="mooselake"
          primary-color="#5D2E2E">
        </rf-booking-widget>
      </section>

      <!-- North Side Pavilion -->
      <section class="mb-12">
        <rf-booking-widget
          rental-id="367"
          resort-alias="mooselake"
          primary-color="#5D2E2E">
        </rf-booking-widget>
      </section>

      <!-- Pontoon 1 -->
      <section>
        <rf-booking-widget
          rental-id="138"
          resort-alias="mooselake"
          primary-color="#5D2E2E"
          object-type="BOAT">
        </rf-booking-widget>
      </section>
    </div>
  `
})
export class BookingWidgetComponent {}
