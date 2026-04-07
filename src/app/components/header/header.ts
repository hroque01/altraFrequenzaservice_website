import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);

  readonly menu = [
    { path: '/', label: 'Home', exact: true },
    { path: '/chi-siamo', label: 'Chi siamo' },
    { path: '/settori', label: 'Settori' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contatti', label: 'Contatti' }
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 30);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
    document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
  }

  closeMenu() {
    this.menuOpen.set(false);
    document.body.style.overflow = '';
  }
}
