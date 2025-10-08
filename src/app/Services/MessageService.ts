import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// Tetszőleges típus használható, például string vagy egyedi interface
@Injectable({ providedIn: 'root' })
export class MessageService {
  private clickSubject = new Subject<void>();
  // Komponensek ezt figyelhetik
  click$ = this.clickSubject.asObservable();

  // Meghívod ezt a funkciót a click eseményből
  triggerClick() {
    this.clickSubject.next();
  }
}
