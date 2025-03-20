import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CardsComponent } from '../../ui/cards/cards.component';
import { CarousalComponent } from '../../ui/carousal/carousal.component';

@Component({
  selector: 'app-random-quotes',
  imports: [CardsComponent, CarouselModule ,CarousalComponent],
  templateUrl: './random-quotes.component.html',
  styleUrl: './random-quotes.component.scss'
})
export class RandomQuotesComponent {
  customOptions: OwlOptions = {
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 4
        }
      },
      nav: true
    }

}
