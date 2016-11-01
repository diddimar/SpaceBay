import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Item } from './item';

@Injectable()
export class BasketService {

    private itemsUrl = 'app/inventory';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(
        private http: Http) { };

    
    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }
    

//-------------------------------Basket-------------------//
    ITEMSINBASKET: Item[] = [];
    numberOfItems = 0;
    itemAlreadyInBasket = false;
    totalPrice = 0;
    totalPriceOfId = 0;
 
   
    
    getItemsInBasket(): Promise<Item[]> {
    return Promise.resolve(this.ITEMSINBASKET);
    }



   addToBasket(item : Item){
        for(let x = 0;x < this.ITEMSINBASKET.length; x++){
          if(this.ITEMSINBASKET[x].id == item.id){
               item.qty = this.ITEMSINBASKET[x].qty + 1;
           
               this.itemAlreadyInBasket = true;
              }
        }
        if(this.itemAlreadyInBasket == true){
          for(let x = 0;x < this.ITEMSINBASKET.length; x++){
            if(this.ITEMSINBASKET[x].id == item.id){
                  this.ITEMSINBASKET.splice(x, 1);
               }   
        }
    }

    item.totalPrice =+ item.price;
    this.totalPrice += item.totalPrice; 
    this.ITEMSINBASKET.push(item);
    this.numberOfItems += 1;
    }

    deleteFromBasket(item): void {   
      for(let x = 0;x < this.ITEMSINBASKET.length; x++){
          if(this.ITEMSINBASKET[x].id == item.id && this.ITEMSINBASKET[x].qty == 1){
              item.qty -= 1 ;
              this.ITEMSINBASKET.splice(x, 1);
              }
        } item.qty -= 1 ;
        this.numberOfItems -= 1;
        this.totalPrice -= item.totalPrice;
     }

    


}

 