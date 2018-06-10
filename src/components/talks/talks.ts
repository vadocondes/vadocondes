import { Component } from '@angular/core';
import { TalksProvider } from '../../providers/talks/talks.service';


@Component({
  selector: 'talks',
  template: `<ion-list inset>
              <button ion-item *ngFor="let talk of talks"> {{talk.title}}
              </button> 
            </ion-list>`
})
export class TalksComponent {

  talks;

  constructor(private talksProvider: TalksProvider) {
    this.talksProvider.getAllTalks().subscribe((x) => {
      console.log(x);
      this.talks = x;

    });
  }

}
