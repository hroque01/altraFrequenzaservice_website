import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../shared/reveal.directive';
import { SETTORI, EVENTI, TIPI_EVENTO, Evento, Settore } from '../../shared/site-data';

@Component({
  selector: 'app-home',
  imports: [RevealDirective, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomePage {
  readonly settori = SETTORI;
  readonly tipi = TIPI_EVENTO;

  // ── Numeri ──
  readonly numeri = [
    { value: '12', label: 'Anni di esperienza', suffix: '+' },
    { value: '400', label: 'Eventi gestiti', suffix: '+' },
    { value: '4', label: 'Settori coordinati', suffix: '' },
    { value: '0', label: 'Palchi fermi', suffix: '' }
  ];

  // ── Marquee clienti ──
  readonly clientiLoghi = [
    'BRAND ONE', 'STUDIO MILANO', 'EVENTI SRL', 'WEDDING CO',
    'FESTIVAL X', 'CONVENTION+', 'LIVE PROD', 'ATELIER'
  ];

  // ── Perché noi ──
  readonly perche = [
    {
      num: '01',
      titolo: 'Un unico referente.',
      desc: 'Niente più 4 fornitori da coordinare. Un project manager segue il tuo evento dalla prima call al carico-scarico.'
    },
    {
      num: '02',
      titolo: 'Mezzi e magazzino propri.',
      desc: 'Tutta l\'attrezzatura è nostra. Niente noleggi dell\'ultimo minuto, niente sorprese sotto al palco.'
    },
    {
      num: '03',
      titolo: 'Esperienza che si vede.',
      desc: '12 anni sul campo, 400+ eventi gestiti, 0 palchi fermi. I numeri parlano prima di noi.'
    }
  ];

  // ── Chi siamo / valori ──
  readonly valori = [
    {
      titolo: 'Affidabilità ossessiva',
      desc: 'Ogni cavo testato. Ogni faro provato. Ogni metro di palco controllato. La parola "imprevisto" non fa parte del nostro vocabolario.'
    },
    {
      titolo: 'Tutto in casa',
      desc: 'Magazzino di proprietà, mezzi nostri, tecnici dipendenti. Niente catene di fornitori, niente scuse all\'ultimo minuto.'
    },
    {
      titolo: 'Project management vero',
      desc: 'Un referente unico dalla call iniziale al carico-scarico. Sai sempre con chi parlare.'
    },
    {
      titolo: 'Investimento continuo',
      desc: 'Aggiorniamo l\'attrezzatura ogni anno. Marche professionali — d&b, Robe, Martin, Layher — sono lo standard.'
    }
  ];

  // ── Settori modal ──
  readonly settoreModal = signal<Settore | null>(null);

  apriSettore(s: Settore) {
    this.settoreModal.set(s);
    document.body.style.overflow = 'hidden';
  }

  chiudiSettore() {
    this.settoreModal.set(null);
    document.body.style.overflow = '';
  }

  // ── Gallery filtro + lightbox ──
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

  // ── Form contatti ──
  readonly form = signal({
    nome: '',
    email: '',
    telefono: '',
    tipoEvento: '',
    data: '',
    messaggio: ''
  });
  readonly submitted = signal(false);
  readonly tipiEvento = ['Concerto', 'Corporate', 'Festival', 'Wedding', 'Altro'];

  onSubmit(e: Event) {
    e.preventDefault();
    console.log('Form inviato:', this.form());
    this.submitted.set(true);
  }
}
