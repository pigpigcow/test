import { Component, ElementRef, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { Platform, PickerController } from '@ionic/angular';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  styleUrls: ['./map.scss']
})
export class MapPage {
  title = "Meter";
  delivered = false;
  NumberOptions = [];

   srcList = [];

   maxImage = 10;
   itemLabel = 'Pictures of storage';
   required = false;


  @ViewChild('mapCanvas', { static: true }) mapElement: ElementRef;

  constructor(
    public pickerController: PickerController,
    public confData: ConferenceData,
    public platform: Platform) {}

  async selectNumber(){
    const picker = await this.pickerController.create({
      columns: this.getColumns(100),
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: (value) => {
            console.log(`Got Value ${value}`);
          }
        }
      ]
    });

    await picker.present();
  }

  getColumnOptions(numOptions) {
    let options = [];
    for (let i = 0; i < numOptions; i++) {
      options.push({
        text: numOptions,
        value: i
      })
    }

    return options;
  }

  getColumns(numOptions) {
    let columns = [];
    for (let i = 0; i < numOptions; i++) {
      columns.push({
        name: "Count",
        options: this.getColumnOptions(numOptions)
      });
    }

    return columns;
  }
}

