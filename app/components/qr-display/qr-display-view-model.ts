import { Observable, isAndroid, Utils } from '@nativescript/core';
import { APP_CONSTANTS } from '../../shared/constants/app-constants';
import { QRHelper } from '../../shared/utils/qr-helper';

export class QRDisplayViewModel extends Observable {
  private _qrImageUrl: string;
  private _message: string;
  private _platformSpecificMessage: string;
  private _qrSize: number;

  constructor() {
    super();
    
    this._qrImageUrl = QRHelper.getQRCodeUrl();
    this._message = APP_CONSTANTS.QR_CODE_MESSAGE;
    this._qrSize = APP_CONSTANTS.QR_CODE_SIZE;
    this._platformSpecificMessage = `Scan to preview on ${isAndroid ? 'Android' : 'iOS'}`;
  }

  get qrImageUrl(): string {
    return this._qrImageUrl;
  }

  get message(): string {
    return this._message;
  }

  get platformSpecificMessage(): string {
    return this._platformSpecificMessage;
  }

  get qrSize(): number {
    return this._qrSize;
  }

  onOpenScanner() {
    const url = this._qrImageUrl;
    if (isAndroid) {
      Utils.openUrl("market://details?id=org.nativescript.preview");
    } else {
      Utils.openUrl("https://apps.apple.com/us/app/nativescript-preview/id1264484702");
    }
  }
}