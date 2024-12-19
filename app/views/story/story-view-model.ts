import { Observable } from '@nativescript/core';
import { StorageService } from '../../shared/services/storage.service';

export class StoryViewModel extends Observable {
    private _story: any;
    private _currentPageIndex: number = 0;
    private _currentContent: string = '';
    private _hasNextPage: boolean = true;
    private _hasPreviousPage: boolean = false;

    constructor(story: any) {
        super();
        this._story = story;
        this.updateContent();
    }

    get story(): any {
        return this._story;
    }

    get currentContent(): string {
        return this._currentContent;
    }

    get hasNextPage(): boolean {
        return this._hasNextPage;
    }

    get hasPreviousPage(): boolean {
        return this._hasPreviousPage;
    }

    onNextPage() {
        if (this._currentPageIndex < this._story.content.length - 1) {
            this._currentPageIndex++;
            this.updateContent();
        }
    }

    onPreviousPage() {
        if (this._currentPageIndex > 0) {
            this._currentPageIndex--;
            this.updateContent();
        }
    }

    private updateContent() {
        this._currentContent = this._story.content[this._currentPageIndex];
        this._hasNextPage = this._currentPageIndex < this._story.content.length - 1;
        this._hasPreviousPage = this._currentPageIndex > 0;
        
        this.notifyPropertyChange('currentContent', this._currentContent);
        this.notifyPropertyChange('hasNextPage', this._hasNextPage);
        this.notifyPropertyChange('hasPreviousPage', this._hasPreviousPage);
    }
}