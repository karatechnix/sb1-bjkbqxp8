import { ApplicationSettings } from '@nativescript/core';

export class StorageService {
    private static readonly CHILDREN_KEY = 'children_profiles';
    private static readonly SETTINGS_KEY = 'app_settings';

    static saveChildren(children: any[]): void {
        try {
            const jsonString = JSON.stringify(children);
            ApplicationSettings.setString(this.CHILDREN_KEY, jsonString);
            console.log('Saved children:', jsonString);
        } catch (error) {
            console.error('Error saving children:', error);
        }
    }

    static getChildren(): any[] {
        try {
            const data = ApplicationSettings.getString(this.CHILDREN_KEY);
            console.log('Retrieved children data:', data);
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.error('Error getting children:', error);
            return [];
        }
    }

    static saveSettings(settings: any): void {
        try {
            const jsonString = JSON.stringify(settings);
            ApplicationSettings.setString(this.SETTINGS_KEY, jsonString);
            console.log('Saved settings:', jsonString);
        } catch (error) {
            console.error('Error saving settings:', error);
        }
    }

    static getSettings(): any {
        try {
            const data = ApplicationSettings.getString(this.SETTINGS_KEY);
            console.log('Retrieved settings:', data);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Error getting settings:', error);
            return null;
        }
    }

    static clearAll(): void {
        ApplicationSettings.clear();
    }
}