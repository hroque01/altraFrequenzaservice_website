import { Component, computed, signal } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { EVENTI, TIPI_EVENTO, Evento } from '../../shared/site-data';

@Component({
  selector: 'app-gallery',
  imports: [RevealDirective],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class GalleryPage {
  readonly tipi = TIPI_EVENTO;
  readonly filtroAttivo = signal<string>('Tutti');
  readonly lightbox = signal<Evento | null>(null);

  readonly eventiFiltrati = computed(() => {
    const f = this.filtroAttivo();
    if (f === 'Tutti') return EVENTI;
    return EVENTI.filter(e => e.tipo === f);
  });

  setFiltro(t: string) {
    this.filtroAttivo.set(t);
  }

  apriLightbox(e: Evento) {
    this.lightbox.set(e);
    document.body.style.overflow = 'hidden';
  }

  chiudiLightbox() {
    this.lightbox.set(null);
    document.body.style.overflow = '';
  }
}
