import { isAndroid } from '@nativescript/core';

export class QRHelper {
  static getQRCodeUrl(): string {
    // Get the QR code URL based on the platform
    if (isAndroid) {
      return 'https://preview.nativescript.org/android';
    } else {
      return 'https://preview.nativescript.org/ios';
    }
  }
}