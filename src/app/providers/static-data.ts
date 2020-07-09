import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StaticData {
    static appName = "<<AppName>>";
    static tabs: any = [
        { tab: 'schedule', icon: 'search-circle-outline', label: 'Inspection', url: '/app/tabs/schedule'},
        { tab: 'speakers', icon: 'cube-outline', label: 'Inventory', url: '/app/tabs/speakers'},
        { tab: 'map', icon: 'speedometer-outline', label: 'Meter', url: '/app/tabs/map'},
        { tab: 'about', icon: 'sync-outline', label: 'S and R', url: '/app/tabs/about'}
      ];
}