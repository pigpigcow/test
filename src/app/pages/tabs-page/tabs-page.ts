import { Component } from '@angular/core';
import { StaticData } from '../../providers/static-data';
import { Platform } from '@ionic/angular';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  tabs: any = StaticData.tabs;
  hidden = false;

  constructor(public platform: Platform) {
    this.hidden = platform.width() > 500;
  }
}
