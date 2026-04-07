import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);
  readonly activeSection = signal<string>('home');

  readonly menu = [
    { id: 'home', label: 'Home' },
    { id: 'chi-siamo', label: 'Chi siamo' },
    { id: 'settori', label: 'Settori' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contatti', label: 'Contatti' }
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 30);
    this.updateActive();
  }

  private updateActive() {
    const offset = 120;
    let current = this.menu[0].id;
    for (const item of this.menu) {
      const el = document.getElementById(item.id);
      if (el && el.getBoundingClientRect().top - offset <= 0) {
        current = item.id;
      }
    }
    this.activeSection.set(current);
  }

  scrollTo(id: string, e: Event) {
    e.preventDefault();
    this.closeMenu();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
