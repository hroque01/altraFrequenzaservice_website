import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-chi-siamo',
  imports: [RouterLink, RevealDirective],
  templateUrl: './chi-siamo.html',
  styleUrl: './chi-siamo.scss'
})
export class ChiSiamoPage {
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
      desc: 'Un referente unico dalla call iniziale al carico-scarico. Sai sempre con chi parlare, e quella persona sa tutto del tuo evento.'
    },
    {
      titolo: 'Investimento continuo',
      desc: 'Aggiorniamo l\'attrezzatura ogni anno. Le marche professionali del settore — d&b, Robe, Martin, Layher — fanno parte del nostro standard.'
    }
  ];
}
