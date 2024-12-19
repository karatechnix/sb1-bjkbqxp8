import { EventData, Page } from '@nativescript/core';
import { AdventureViewModel } from './adventure-view-model';

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new AdventureViewModel();
}