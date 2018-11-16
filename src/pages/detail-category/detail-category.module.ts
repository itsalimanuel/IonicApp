import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailCategoryPage } from './detail-category';

@NgModule({
  declarations: [
    DetailCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailCategoryPage),
  ],
})
export class DetailCategoryPageModule {}
