import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <div class="dark-theme">
      <nav-bar></nav-bar>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {}
