import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Location }                 from '@angular/common';

import { StoreService } from '../store-service/store.service';
import { BasketService } from '../store-service/basket.service';
import { Item }        from '../store-service/item';

@Component({
    moduleId: module.id,
    selector: 'detail-component',
    templateUrl: './detail.component.html'
})

export class DetailComponent {

    items: Item[];
    selectedItem: Item;
    item: Item;
    numberOfItems = 0;
    totalPrice = 0;

    constructor(
        private storeService : StoreService,
        private basketService : BasketService,
        private route: ActivatedRoute,
        private router : Router,
        private location: Location
    ){}

    ngOnInit(): void {
      this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.storeService.getItem(id)
      .then(k => this.item = k);
    this.getTotalPrice();
      this.getTotalNumberOfItems();
    });
    }

  buy(item){
    this.selectedItem = item;
    this.basketService.addToBasket(item);
    this.getTotalNumberOfItems();
    this.getTotalPrice();
    
    
}
      viewBasket(): void {
        this.router.navigate(['/basket']);
    }

     goBack(): void {
      this.location.back();
    }
    
   
   getTotalPrice(){
      this.totalPrice = this.basketService.totalPrice;
   }
    getTotalNumberOfItems(){
        this.numberOfItems = this.basketService.numberOfItems;
    }
    
}

