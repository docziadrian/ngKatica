import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { StatComponent } from './Components/stat/stat.component';
import { TrafListComponent } from './Components/trafics/list/list.component';
import { CatListComponent } from './Components/categories/list/list.component';

@Component({
  selector: 'app-root', // html tag
  standalone: true, // standalone component
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    StatComponent,
    TrafListComponent,
    CatListComponent,
  ], // függőségek importálása
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Katicabufe';
}
