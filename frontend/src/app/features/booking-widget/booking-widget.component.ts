import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-booking-widget',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="container mx-auto px-4 py-12">
      <rf-booking-widget
        rental-id="1"
        resort-alias="mooselake"
        primary-color="#DC2626">
      </rf-booking-widget>

      <!-- RV Site 1 -->
      <rf-booking-widget
        rental-id="308"
        resort-alias="mooselake"
        primary-color="#DC2626">
      </rf-booking-widget>

      <!-- North Side Pavilion -->
      <rf-booking-widget
        rental-id="367"
        resort-alias="mooselake"
        primary-color="#DC2626">
      </rf-booking-widget>

      <!-- Pontoon 1 -->
      <rf-booking-widget
        rental-id="138"
        resort-alias="mooselake"
        primary-color="#DC2626">
      </rf-booking-widget>
    </div>
  `
})
export class BookingWidgetComponent {}
