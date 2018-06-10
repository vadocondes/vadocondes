import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SuccessPage } from '../success/success';
import { TalksProvider } from './../../providers/talks/talks.service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, private talksProvider: TalksProvider) {
  }

  onSubmit(title, date) {
    this.talksProvider.save(title).subscribe((x) => {
      console.log(x);
      this.navCtrl.push(SuccessPage, { talk: { title, date } })
    });
  }
}
