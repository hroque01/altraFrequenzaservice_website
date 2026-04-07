import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/reveal.directive';
import { SETTORI, EVENTI } from '../../shared/site-data';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RevealDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomePage {
  readonly settori = SETTORI;
  readonly eventiAnteprima = EVENTI.slice(0, 6);

  readonly numeri = [
    { value: '12', label: 'Anni di esperienza', suffix: '+' },
    { value: '400', label: 'Eventi gestiti', suffix: '+' },
    { value: '4', label: 'Settori coordinati', suffix: '' },
    { value: '0', label: 'Palchi fermi', suffix: '' }
  ];

  readonly clientiLoghi = [
    'BRAND ONE', 'STUDIO MILANO', 'EVENTI SRL', 'WEDDING CO',
    'FESTIVAL X', 'CONVENTION+', 'LIVE PROD', 'ATELIER'
  ];

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
}
