import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  readonly menu = [
    { path: '/', label: 'Home', exact: true },
    { path: '/chi-siamo', label: 'Chi siamo' },
    { path: '/settori', label: 'Settori' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contatti', label: 'Contatti' }
  ];
}
