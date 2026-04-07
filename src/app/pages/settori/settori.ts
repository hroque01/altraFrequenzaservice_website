import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/reveal.directive';
import { SETTORI } from '../../shared/site-data';

@Component({
  selector: 'app-settori',
  imports: [RouterLink, RevealDirective],
  templateUrl: './settori.html',
  styleUrl: './settori.scss'
})
export class SettoriPage {
  readonly settori = SETTORI;
}
