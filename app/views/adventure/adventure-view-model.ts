import { Observable, Frame, alert } from '@nativescript/core';
import { StorageService } from '../../shared/services/storage.service';

interface Story {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    content: string[];
}

export class AdventureViewModel extends Observable {
    private _availableStories: Story[];
    private _selectedChildId: string;

    constructor() {
        super();
        
        const settings = StorageService.getSettings();
        this._selectedChildId = settings?.selectedChildId;
        console.log('Adventure initialized with selectedChildId:', this._selectedChildId);
        
        this._availableStories = [
            {
                id: 'story1',
                title: 'The Magic Garden',
                description: 'Join Panky in an enchanted garden full of magical creatures and wonderful surprises!',
                imageUrl: '~/assets/images/garden.png',
                content: [
                    'Once upon a time, in a magical garden...',
                    'There lived a friendly butterfly named Flutter...',
                    'Flutter loved to play with all the flowers...'
                ]
            },
            {
                id: 'story2',
                title: 'Ocean Friends',
                description: 'Dive into an underwater adventure with Panky and meet amazing sea creatures!',
                imageUrl: '~/assets/images/ocean.png',
                content: [
                    'Deep under the blue sea...',
                    'There was a colorful fish named Splash...',
                    'Splash loved to make new friends...'
                ]
            }
        ];
    }

    get availableStories(): Story[] {
        return this._availableStories;
    }

    onStorySelect(args: any) {
        const story = args.object.bindingContext;
        console.log('Story selected:', story);
        
        const settings = StorageService.getSettings();
        this._selectedChildId = settings?.selectedChildId;
        
        if (this._selectedChildId) {
            Frame.topmost().navigate({
                moduleName: 'views/story/story-page',
                context: {
                    story: story
                }
            });
        } else {
            alert({
                title: "Hold On!",
                message: "First, let's create your profile so we can save your progress!",
                okButtonText: "OK"
            }).then(() => {
                Frame.topmost().navigate({
                    moduleName: 'views/profile/profile-page'
                });
            });
        }
    }
}