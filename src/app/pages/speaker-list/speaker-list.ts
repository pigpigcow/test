import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html',
  styleUrls: ['./speaker-list.scss'],
})
export class SpeakerListPage {
  items = [
    { label: 'Materials Delivered to Yard?', value: 'NA', note: ''},
    { label: 'Poles counted?', value: 'NA', note: ''},
    { label: 'Pole count reconciled?', value: 'NA', note: ''},
    { label: 'Tx Counted?', value: 'NA', note: ''},
    { label: 'Wire reels collected or shipped?', value: 'NA', note: ''},
  ];
  selectOptions = {
    header: 'Select a Location'
  };
  
  title = 'Inventory';

  constructor(public confData: ConferenceData) {}

  ionViewDidEnter() {}
}
