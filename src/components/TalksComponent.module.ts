import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { TalksComponent } from './talks/talks';
@NgModule({
	declarations: [TalksComponent],
	imports: [IonicPageModule.forChild(TalksComponent)],
	exports: [TalksComponent]
})
export class TalksComponentModule {}
