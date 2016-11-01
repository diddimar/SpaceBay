import { Component } from '@angular/core';
import { Router }   from '@angular/router';
import { Location }                 from '@angular/common';
import { BasketService }            from '../store-service/basket.service';
import { Item } from '../store-service/item';

@Component({
    moduleId: module.id,
    selector: 'basket-component',
    templateUrl: './basket.component.html'
})

export class BasketComponent {
    
    items: Item[];
    selectedItem: Item;
    numberOfItems = 0;
    totalPrice = 0;
    totalPriceOfId = 0;



    
 constructor(
        private basketService : BasketService,
        private router : Router,
        private location: Location
    ){}

    ngOnInit(): void {
        this.basketService.getItemsInBasket()
        .then(k => this.items = k)
        this.basketService.getItemsInBasket();
        this.getTotalNumberOfItems();
        this.getTotalPrice();
        this.getTotalPriceOfId();
        
    }


    goBack(): void {
        this.location.back();
    }

    onSelect(item: Item): void {
        this.selectedItem = item;
        this.router.navigate(['/detail', this.selectedItem.id]);
    }
    
    delete(item: Item): void {
        this.selectedItem = item;
        this.basketService.deleteFromBasket(item);
        this.getTotalNumberOfItems();
        this.getTotalPrice();
    }


    getTotalPriceOfId(){
        this.totalPriceOfId = this.basketService.totalPriceOfId;
   }
    getTotalPrice(){
        this.totalPrice = this.basketService.totalPrice;
   }
    getTotalNumberOfItems(){
        this.numberOfItems = this.basketService.numberOfItems;
    }

  
    emptyBasket(){
        this.basketService.ITEMSINBASKET = [];
        this.basketService.totalPrice = 0;
        this.getTotalPrice();
        this.basketService.numberOfItems = 0;
        this.getTotalNumberOfItems();
        this.basketService.getItemsInBasket()
        .then(k => {
            this.items = k;
     
        })
    }



        
    
}
