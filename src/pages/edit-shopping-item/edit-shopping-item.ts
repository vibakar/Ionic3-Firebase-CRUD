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
  selectedItem: Item;
  disable:string = "true";
  constructor(public navCtrl: NavController, public navParams: NavParams, public shoppingService: ShoppingService, public toast: ToastService) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }

  editItem(item: Item){
    this.toast.showLoading('Saving..');
  	this.shoppingService.editShoppingItem(item)
  						.then(()=>{
                this.toast.showToast(`${item.name} updated!!`);
  							this.navCtrl.setRoot('ListShoppingItemPage');
  						});
  }

  confirmDelete(item: Item){
    this.selectedItem = item;
    this.toast.showConfirm('Warning', `Are you sure to delete ${item.name}?`, this.userResponse);
  }

  deleteItem(){
    let item: Item = this.selectedItem;
    this.shoppingService.deleteShoppingItem(item)
                        .then(()=>{
                              this.toast.showToast(`${item.name} deleted!!`);
                              this.navCtrl.setRoot('ListShoppingItemPage');
                        })
  }

  userResponse = (response:string)=>{
    if(response == 'yes'){
      this.toast.showLoading('Deleting..');
      this.deleteItem();
    }
  }

  enableEdit(){
    if(this.disable == "true"){
      this.disable = "false";
    }else {
      this.disable = "true";
    }
  }



}
