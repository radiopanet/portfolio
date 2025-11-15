import { Component, signal, HostBinding } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css',
  animations: []
})
export class App {
  protected readonly title = signal('Thabo Radiopane');

  collapsed = signal(false);
  mobileMenu = signal(false);

  toggleSidebar() {
    if(window.innerWidth < 900) {
      this.mobileMenu.update (v => !v);
    } else {
      this.collapsed.update(v => !v);
    }
  }

  toggleDark() {
    document.body.classList.toggle('dark');
  }
}
