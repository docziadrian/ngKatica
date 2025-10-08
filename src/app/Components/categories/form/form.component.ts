import { Component, input } from '@angular/core';
import { fromEvent } from 'rxjs';
import axios from 'axios';
import { MessageService } from '../../../Services/MessageService';

@Component({
  selector: 'app-catform',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class CatFormComponent {
  constructor(private messageService: MessageService) {} // Konstruktor

  categoriaInput = input.required<string>(); // INPUT mező a HTML form -ban!

  bekertKategoriaNev = ''; // Ez a bekért adat a felhasználótol.

  handleInputChange(event: Event) {
    // Et történik, ha a felhasználó gépel az input mezőbe
    const inputElement = event.target as HTMLInputElement;
    this.bekertKategoriaNev = inputElement.value;
    console.log(this.bekertKategoriaNev);
  }

  async handleKategoriaFelvetel() {
    // Kategória mentés gomb megnyomása kor
    if (!this.bekertKategoriaNev) {
      alert('Kategória név megadása kötelező!');
      return;
    }

    const res = await axios.post('http://localhost:3000/kategoria', {
      Headers: { 'Content-Type': 'application/json' },
      kategoriaNev: this.bekertKategoriaNev,
    });
    console.log(res.data);
    alert('Kategória mentve!');
    this.messageService.triggerClick(); // Esemény kiváltása
    this.bekertKategoriaNev = ''; // INPUT mező ürítése
  }
}
