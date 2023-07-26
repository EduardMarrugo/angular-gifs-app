import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { GifsCardListComponent } from './components/gifs-list/gifs-card-list.component';

@NgModule({
  declarations: [HomePageComponent, SearchBoxComponent, GifsCardListComponent],
  imports: [CommonModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
