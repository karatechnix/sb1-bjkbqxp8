import { Observable, Frame } from '@nativescript/core';

export class MainViewModel extends Observable {
  private _message: string;

  constructor() {
    super();
    this._message = 'Start your magical journey!';
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    if (this._message !== value) {
      this._message = value;
      this.notifyPropertyChange('message', value);
    }
  }

  onProfilesTap() {
    Frame.topmost().navigate({
      moduleName: 'views/profile/profile-page'
    });
  }

  onStartAdventure() {
    Frame.topmost().navigate({
      moduleName: 'views/adventure/adventure-page'
    });
  }

  onSettingsTap() {
    Frame.topmost().navigate({
      moduleName: 'views/settings/settings-page'
    });
  }
}