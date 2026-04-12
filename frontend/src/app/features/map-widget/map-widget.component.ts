import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-map-widget',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="w-full" style="height: 100vh;">
      <rf-map-widget
        resort-alias="mooselake"
        primary-color="#059669"
        height="100%"
        width="100%">
      </rf-map-widget>
    </div>
  `
})
export class MapWidgetComponent {}
