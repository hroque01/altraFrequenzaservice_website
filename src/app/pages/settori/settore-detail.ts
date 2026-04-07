import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { RevealDirective } from '../../shared/reveal.directive';
import { SETTORI, EVENTI } from '../../shared/site-data';

@Component({
  selector: 'app-settore-detail',
  imports: [RouterLink, RevealDirective],
  templateUrl: './settore-detail.html',
  styleUrl: './settore-detail.scss'
})
export class SettoreDetailPage {
  private route = inject(ActivatedRoute);

  readonly slug = toSignal(
    this.route.paramMap.pipe(map(p => p.get('slug') ?? 'audio')),
    { initialValue: 'audio' }
  );

  readonly settore = computed(() =>
    SETTORI.find(s => s.slug === this.slug()) ?? SETTORI[0]
  );

  readonly altri = computed(() =>
    SETTORI.filter(s => s.slug !== this.slug())
  );

  readonly eventiCorrelati = computed(() => {
    const titolo = this.settore().titolo;
    return EVENTI.filter(e => e.servizi.includes(titolo)).slice(0, 4);
  });
}
