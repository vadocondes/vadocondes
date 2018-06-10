import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { NativeStorage } from '@ionic-native/native-storage';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

const key = 'firstVisited';

//declare let cordova:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [InAppBrowser, NativeStorage]
})
export class HomePage {

  ngOnInit() {
    this.storage.get(key).then(x => console.log('firsTime', x));

  }
  public persistValue() {
    this.storage.get(key)
      .then(x => this.storage.set(key, !x))
      .catch(err => console.log(err))
  }

  public showValue() {
    this.storage.get(key)
      .then(x => console.log('read', x))
      .catch(err => console.log(err))
  }

  constructor(public navCtrl: NavController, private storage: Storage, private browser: InAppBrowser,
    private nativeStorage: NativeStorage) {

  }

  click() {
    let browser = this.browser.create('http://www.google.com');
    browser.show();

    this.nativeStorage.getItem(key).then(
      x => {
        console.log(x);
        this.nativeStorage.setItem(key,true).then(x => console.log(x));
      }
    )

   // cordova.plugins.snackbar('Ejemplo de texto', 'INDEFINITE', 'Accion', () => console.log('acciion'));
  }

}
