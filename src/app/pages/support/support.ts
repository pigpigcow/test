import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
  styleUrls: ['./support.scss'],
})
export class SupportPage {
  submitted = false;
  supportMessage: string;
  message = [];

  constructor(
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {
      this.message = ["App information place holder",
          "Version: 1",
          "Build: 1",
          "Env: 1"];
  }
}
