import { Observable } from '@nativescript/core';

export class SettingsViewModel extends Observable {
    private _backgroundMusic: boolean = true;
    private _soundEffects: boolean = true;
    private _textSize: number = 16;
    private _storyUpdates: boolean = true;

    constructor() {
        super();
        this.loadSettings();
    }

    get backgroundMusic(): boolean {
        return this._backgroundMusic;
    }

    set backgroundMusic(value: boolean) {
        if (this._backgroundMusic !== value) {
            this._backgroundMusic = value;
            this.notifyPropertyChange('backgroundMusic', value);
        }
    }

    get soundEffects(): boolean {
        return this._soundEffects;
    }

    set soundEffects(value: boolean) {
        if (this._soundEffects !== value) {
            this._soundEffects = value;
            this.notifyPropertyChange('soundEffects', value);
        }
    }

    get textSize(): number {
        return this._textSize;
    }

    set textSize(value: number) {
        if (this._textSize !== value) {
            this._textSize = value;
            this.notifyPropertyChange('textSize', value);
        }
    }

    get storyUpdates(): boolean {
        return this._storyUpdates;
    }

    set storyUpdates(value: boolean) {
        if (this._storyUpdates !== value) {
            this._storyUpdates = value;
            this.notifyPropertyChange('storyUpdates', value);
        }
    }

    private loadSettings() {
        // TODO: Load settings from application settings
    }

    onSaveSettings() {
        // TODO: Save settings to application settings
        console.log('Settings saved');
    }
}