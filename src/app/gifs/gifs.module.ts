import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { GifsCardComponent } from './components/card/gifs-card/gifs-card.component';
import { GifsCardListComponent } from './components/card-list/gifs-card-list.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [
    GifsCardComponent,
    GifsCardListComponent,
    HomePageComponent,
    SearchBoxComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
