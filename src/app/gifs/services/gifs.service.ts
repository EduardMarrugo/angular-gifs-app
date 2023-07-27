import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifs } from '../interfaces/gifs.interface';

@Injectable({ providedIn: 'root' })
export class GifsServices {
  public gifsList: Gif[] = [];
  private _tagsHistory: string[] = [];
  private readonly apiKey: string = 'tmzf8x41YfQ85Oz54r9cPYD10YeCWqHH';
  private readonly baseUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private httpClient: HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizedHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }
  private loadLocalStorage(): void {
    const history = localStorage.getItem('history') || '[]';

    this._tagsHistory = JSON.parse(history);

    if (this._tagsHistory.length > 0) {
      this.searchTag(this._tagsHistory[0]);
    }
  }
  public searchTag(newTag: string): void {
    if (newTag.length === 0) return;
    this.organizedHistory(newTag);

    let params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', newTag);

    this.httpClient
      .get<SearchGifs>(`${this.baseUrl}/search`, { params })
      .subscribe((resp) => {
        this.gifsList = resp.data;
        console.log({ gifs: this.gifsList });
      });
  }
}
