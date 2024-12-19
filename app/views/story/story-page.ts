import { EventData, Page } from '@nativescript/core';
import { StoryViewModel } from './story-view-model';

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    const story = page.navigationContext.story;
    page.bindingContext = new StoryViewModel(story);
}