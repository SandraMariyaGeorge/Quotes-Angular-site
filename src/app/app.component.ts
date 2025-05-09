import { Component } from '@angular/core';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Quotes_App';
}

