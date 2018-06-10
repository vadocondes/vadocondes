import { AboutPage } from '../pages/about/about';
import { BrowserModule } from '@angular/platform-browser';
import { ContactPage } from '../pages/contact/contact';
import { ErrorHandler, NgModule } from '@angular/core';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SuccessPage } from '../pages/success/success';
import { TabsPage } from '../pages/tabs/tabs';
import { TalksComponentModule } from '../components/TalksComponent.module';
import { TalksProvider } from '../providers/talks/talks.service';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SuccessPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    TalksComponentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SuccessPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TalksProvider
  ]
})
export class AppModule {}
