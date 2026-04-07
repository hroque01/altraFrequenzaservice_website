import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-settori',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './settori.html',
  styleUrl: './settori.scss'
})
export class SettoriPage {
  readonly settori = [
    { slug: 'audio', label: 'Audio' },
    { slug: 'luci', label: 'Luci' },
    { slug: 'video', label: 'Video' },
    { slug: 'strutture', label: 'Strutture' }
  ];
}
