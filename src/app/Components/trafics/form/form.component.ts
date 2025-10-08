import { Component, input } from '@angular/core';
import { MessageService } from '../../../Services/MessageService';
import axios from 'axios';

@Component({
  selector: 'app-traficsform',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class TraficsFormComponent {
  constructor(private messageService: MessageService) {} // Konstruktor

  termeknevInput = input.required<string>(); // INPUT mező a HTML form -ban!
  kategoriaIDInput = input.required<string>(); // INPUT mező a HTML form -ban!
  vevoNevInput = input.required<string>(); // INPUT mező a HTML form -ban!
  egysegInput = input.required<string>(); // INPUT mező a HTML form -ban!
  nettoArInput = input.required<string>(); // INPUT mező a HTML form -ban!
  mennyisegInput = input.required<string>(); // INPUT mező a HTML form -ban!
  kiadvaInput = input.required<string>(); // INPUT mező a HTML form -ban! // "true" vagy "false"

  bekertTermekNev = ''; // Ez a bekért adat a felhasználótol.
  bekertKategoriaID = 0; // Ez a bekért adat a felhasználótol.
  bekertVevoNev = '';
  bekertEgyseg = 0; // Ez a bekért adat a felhasználótol.
  bekertNettoAr = 0;
  bekertMennyiseg = 0; // Ez a bekért adat a felhasználótol.
  bekertKiadva = ''; // Ez a bekért adat a felhasználótol. // "true" vagy "false"

  handleTermekNevInputChange(event: Event) {
    // Et történik, ha a felhasználó gépel az input mezőbe
    const inputElement = event.target as HTMLInputElement;
    this.bekertTermekNev = inputElement.value;
    console.log(this.bekertTermekNev);
  }
  handleKategoriaIDInputChange(event: Event) {
    // Et történik, ha a felhasználó gépel az input mezőbe
    const inputElement = event.target as HTMLInputElement;
    this.bekertKategoriaID = Number(inputElement.value);
    console.log(this.bekertKategoriaID);
  }
  handleVevoNevInputChange(event: Event) {
    // Et történik, ha a felhasználó gépel az input mezőbe
    const inputElement = event.target as HTMLInputElement;
    this.bekertVevoNev = inputElement.value;
    console.log(this.bekertVevoNev);
  }
  handleEgysegInputChange(event: Event) {
    // Et történik, ha a felhasználó gépel az input mezőbe
    const inputElement = event.target as HTMLInputElement;
    this.bekertEgyseg = Number(inputElement.value);
    console.log(this.bekertEgyseg);
  }
  handleNettoArInputChange(event: Event) {
    // Et történik, ha a felhasználó gépel az input mezőbe
    const inputElement = event.target as HTMLInputElement;
    this.bekertNettoAr = Number(inputElement.value);
    console.log(this.bekertNettoAr);
  }
  handleMennyisegInputChange(event: Event) {
    // Et történik, ha a felhasználó gépel az input mezőbe
    const inputElement = event.target as HTMLInputElement;
    this.bekertMennyiseg = Number(inputElement.value);
    console.log(this.bekertMennyiseg);
  }
  handleKiadvaInputChange(event: Event) {
    // Et történik, ha a felhasználó gépel az input mezőbe
    const inputElement = event.target as HTMLInputElement;
    this.bekertKiadva = inputElement.value;
    console.log(this.bekertKiadva);
  }

  async handleForgalomFelvetel() {
    // Kategória mentés gomb megnyomása kor
    if (
      !this.bekertTermekNev ||
      !this.bekertKategoriaID ||
      !this.bekertVevoNev ||
      !this.bekertEgyseg ||
      !this.bekertNettoAr ||
      !this.bekertMennyiseg ||
      !this.bekertKiadva
    ) {
      alert('Input mezők megadása kötelező!');
      return;
    }

    const res = await axios.post('http://localhost:3000/forgalom', {
      Headers: { 'Content-Type': 'application/json' },
      termek: this.bekertTermekNev,
      vevo: this.bekertVevoNev,
      kategoriaId: this.bekertKategoriaID,
      egyseg: this.bekertEgyseg,
      nettoar: this.bekertNettoAr,
      mennyiseg: this.bekertMennyiseg,
      kiadva: this.bekertKiadva,
    });
    console.log(res.data);
    alert('Kategória mentve!');
    this.messageService.triggerClick(); // Esemény kiváltása
  }
}
