import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item.model';
import { ShoppingService } from '../../services/shopping.service';
import { ToastService } from '../../services/toast.service';

@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {
  item: Item;
  constructor(public navCtrl: NavController, public navParams: NavParams, public shoppingService: ShoppingService, public toast: ToastService) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }

  editItem(item: Item){
  	this.shoppingService.editShoppingItem(item)
  						.then(()=>{
  							this.navCtrl.setRoot('HomePage');
  							this.toast.show(`${item.name} updated!!`);
  						});
  }

  deleteItem(item: Item){
    this.shoppingService.deleteShoppingItem(item)
                        .then(()=>{
                          this.navCtrl.setRoot('HomePage');
                          this.toast.show(`${item.name} deleted!!`);
                        })
  }
}
