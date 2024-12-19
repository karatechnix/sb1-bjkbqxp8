import { Observable } from '@nativescript/core';

export interface ChildProfile {
  id: string;
  name: string;
  age: number;
  pronunciation: string;
  achievements: string[];
  progress: {
    currentStory: string;
    completedStories: string[];
  };
}

export class UserModel extends Observable {
  private _currentChild: ChildProfile | null = null;
  private _children: ChildProfile[] = [];

  constructor() {
    super();
  }

  get currentChild(): ChildProfile | null {
    return this._currentChild;
  }

  get children(): ChildProfile[] {
    return this._children;
  }

  addChild(name: string, age: number, pronunciation: string): ChildProfile {
    const child: ChildProfile = {
      id: Date.now().toString(),
      name,
      age,
      pronunciation,
      achievements: [],
      progress: {
        currentStory: '',
        completedStories: []
      }
    };
    
    this._children.push(child);
    this.notifyPropertyChange('children', this._children);
    return child;
  }

  selectChild(id: string): void {
    this._currentChild = this._children.find(child => child.id === id) || null;
    this.notifyPropertyChange('currentChild', this._currentChild);
  }
}