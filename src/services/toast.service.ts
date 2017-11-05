import { Injectable } from '@angular/core';
import { AlertController, ToastController, LoadingController } from 'ionic-angular';

@Injectable()
export class ToastService {
	constructor(private toastCtrl: ToastController, public alertCtrl: AlertController, public loadingCtrl: LoadingController){
	}

	showToast(message: string, duration: number = 3000){
		return this.toastCtrl.create({
			message,
			duration
		}).present();
	}

	showConfirm(title, message, callback) {
    	return this.alertCtrl.create({
	      title: title,
	      message: message,
	      buttons: [
	        {
	          text: 'Yes',
	          handler: () => {
	            callback('yes');
	          }
	        },
	        {
	          text: 'No',
	          handler: () => {
	            callback('no')
	          }
	        }
	      ]
    	}).present();
  	}

  	showLoading(content, duration:number = 3000) {
	  	return this.loadingCtrl.create({
	  	  spinner: 'bubbles',
	      content: content,
	      duration: duration,
	      dismissOnPageChange: true
	    }).present();
	    
  	}

}