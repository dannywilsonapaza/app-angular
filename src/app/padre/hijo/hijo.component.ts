import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  // !: Operador non-null assertion
  // confie en que esta propiedad va ser inicializada posteriormente
  @Input() mensaje!: string;
}
