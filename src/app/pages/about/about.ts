import { Component } from '@angular/core';

import { PopoverController } from '@ionic/angular';

import { PopoverPage } from '../about-popover/about-popover';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['./about.scss'],
})
export class AboutPage {
  location = 'madison';
  conferenceDate = '2047-05-17';

  selectOptions = {
    header: 'Select a Location'
  };

  srcList = [];
  panelExpand = true;
   maxImage = 10;
   itemLabel = 'Pictures and or confirmation';
   required = false;

   iconClicked = false;

  constructor(public popoverCtrl: PopoverController) { }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }

  /**
   * Trigger when button is clicked.
   * @function onClickItem
   */
  public onClickItem() {
    if (!this.iconClicked) {
      this.togglePanel();
    }
    this.iconClicked = false;
  }

  /**
   * Toggle panel and icon
   * @function togglePanel
   */
  public togglePanel() {
    this.panelExpand = !this.panelExpand;
  }
}
