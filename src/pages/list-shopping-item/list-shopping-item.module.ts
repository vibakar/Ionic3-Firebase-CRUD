import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListShoppingItemPage } from './list-shopping-item';

@NgModule({
  declarations: [
    ListShoppingItemPage,
  ],
  imports: [
    IonicPageModule.forChild(ListShoppingItemPage),
  ],
})
export class ListShoppingItemPageModule {}
