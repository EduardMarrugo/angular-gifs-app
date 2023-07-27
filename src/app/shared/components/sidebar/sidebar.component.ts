import { Component } from '@angular/core';
import { GifsServices } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private gifsServices: GifsServices) {}

  public searchTag(newTag: string): void {
    this.gifsServices.searchTag(newTag);
  }

  get tags() {
    return this.gifsServices.tagsHistory;
  }
}
