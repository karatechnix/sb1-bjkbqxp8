import { Observable } from '@nativescript/core';

export interface StoryPage {
  id: string;
  text: string;
  audio?: string;
  animation?: string;
  choices?: {
    text: string;
    nextPageId: string;
  }[];
}

export class StoryModel extends Observable {
  private _currentPage: StoryPage | null = null;
  private _pages: Map<string, StoryPage> = new Map();
  private _title: string;

  constructor(title: string) {
    super();
    this._title = title;
  }

  get currentPage(): StoryPage | null {
    return this._currentPage;
  }

  get title(): string {
    return this._title;
  }

  addPage(page: StoryPage): void {
    this._pages.set(page.id, page);
  }

  navigateToPage(pageId: string): boolean {
    const page = this._pages.get(pageId);
    if (page) {
      this._currentPage = page;
      this.notifyPropertyChange('currentPage', this._currentPage);
      return true;
    }
    return false;
  }

  start(): void {
    const firstPage = Array.from(this._pages.values())[0];
    if (firstPage) {
      this._currentPage = firstPage;
      this.notifyPropertyChange('currentPage', this._currentPage);
    }
  }
}