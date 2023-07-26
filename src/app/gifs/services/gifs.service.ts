import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GifsServices {
  private _tagsHistory: string[] = [];
  private readonly apiKey: string = 'tmzf8x41YfQ85Oz54r9cPYD10YeCWqHH';
  constructor() {}

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
  }

  public searchTag(newTag: string): void {
    if (newTag.length === 0) return;
    this.organizedHistory(newTag);
  }
}
