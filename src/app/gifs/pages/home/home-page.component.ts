import { Component } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';
import { GifsServices } from '../../services/gifs.service';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  constructor(private gifsServices: GifsServices) {}

  get gifs(): Gif[] {
    return this.gifsServices.gifsList;
  }
}
