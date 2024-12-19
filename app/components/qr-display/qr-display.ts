import { EventData } from '@nativescript/core';
import { QRDisplayViewModel } from './qr-display-view-model';

export function onLoaded(args: EventData) {
    const view = args.object;
    view.bindingContext = new QRDisplayViewModel();
}