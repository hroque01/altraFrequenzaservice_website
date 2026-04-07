import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-contatti',
  imports: [FormsModule, RevealDirective],
  templateUrl: './contatti.html',
  styleUrl: './contatti.scss'
})
export class ContattiPage {
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
    // TODO: integrazione invio email (Aruba SMTP / form action)
    console.log('Form inviato:', this.form());
    this.submitted.set(true);
  }
}
