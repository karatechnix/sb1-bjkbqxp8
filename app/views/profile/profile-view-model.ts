import { Observable, alert } from '@nativescript/core';
import { StorageService } from '../../shared/services/storage.service';

export class ProfileViewModel extends Observable {
    private _childName: string = '';
    private _age: string = '';
    private _pronunciation: string = '';
    private _children: any[] = [];

    constructor() {
        super();
        this.loadChildren();
        console.log('ProfileViewModel initialized');
    }

    private loadChildren() {
        this._children = StorageService.getChildren();
        console.log('Loaded children:', this._children);
        this.notifyPropertyChange('children', this._children);
    }

    get childName(): string {
        return this._childName;
    }

    set childName(value: string) {
        if (this._childName !== value) {
            this._childName = value;
            this.notifyPropertyChange('childName', value);
        }
    }

    get age(): string {
        return this._age;
    }

    set age(value: string) {
        if (this._age !== value) {
            this._age = value;
            this.notifyPropertyChange('age', value);
        }
    }

    get pronunciation(): string {
        return this._pronunciation;
    }

    set pronunciation(value: string) {
        if (this._pronunciation !== value) {
            this._pronunciation = value;
            this.notifyPropertyChange('pronunciation', value);
        }
    }

    get children(): any[] {
        return this._children;
    }

    onSaveProfile() {
        console.log('Saving profile...');
        if (!this._childName || !this._age) {
            alert({
                title: "Oops!",
                message: "Please fill in your name and age!",
                okButtonText: "OK"
            });
            return;
        }

        const ageNum = parseInt(this._age, 10);
        if (isNaN(ageNum) || ageNum < 1 || ageNum > 12) {
            alert({
                title: "Oops!",
                message: "Please enter a valid age between 1 and 12!",
                okButtonText: "OK"
            });
            return;
        }

        const newChild = {
            id: Date.now().toString(),
            name: this._childName,
            age: ageNum,
            pronunciation: this._pronunciation || this._childName,
            achievements: [],
            progress: {
                currentStory: '',
                completedStories: []
            }
        };

        this._children.push(newChild);
        StorageService.saveChildren(this._children);
        console.log('Profile saved:', newChild);
        
        // Select the newly created profile
        StorageService.saveSettings({ selectedChildId: newChild.id });
        
        // Reset form
        this.childName = '';
        this.age = '';
        this.pronunciation = '';
        
        this.notifyPropertyChange('children', this._children);

        alert({
            title: "Yay!",
            message: `Welcome ${newChild.name}! Your profile is ready for adventure!`,
            okButtonText: "Let's Go!"
        });
    }

    onChildSelect(args: { index: number }) {
        const selectedChild = this._children[args.index];
        StorageService.saveSettings({ selectedChildId: selectedChild.id });
        console.log('Selected child:', selectedChild);

        alert({
            title: "Profile Selected",
            message: `Hi ${selectedChild.name}! Ready for an adventure?`,
            okButtonText: "Yes!"
        });
    }
}