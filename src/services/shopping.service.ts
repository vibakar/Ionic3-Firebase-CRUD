import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Item } from '../models/item.model';

@Injectable()
export class ShoppingService {
	private shoppingListRef = this.db.list<Item>('shopping-list');
	constructor(private db: AngularFireDatabase){
	}

	getShoppingList() {
		return this.shoppingListRef;
	}

	addShoppingItem(item: Item){
	    this.shoppingListRef.push(item).then(ref=>{
			console.log(ref.key)
		});
	}
}