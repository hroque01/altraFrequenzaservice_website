import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-settore-detail',
  template: `
    <div class="py-8">
      <h2 class="text-2xl font-semibold capitalize">{{ slug() }}</h2>
      <p class="mt-2">Contenuto in costruzione.</p>
    </div>
  `
})
export class SettoreDetailPage {
  private route = inject(ActivatedRoute);
  readonly slug = toSignal(this.route.paramMap.pipe(map(p => p.get('slug') ?? '')), { initialValue: '' });
}
