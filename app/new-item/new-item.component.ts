import { Component } from '@angular/core';
import { Location }                 from '@angular/common';

import { StoreService } from '../store-service/store.service';
import { Item }        from '../store-service/item';

@Component({
    moduleId: module.id,
    selector: 'new-item-component',
    templateUrl: './new-item.component.html'
})

export class NewItemComponent {

    items: Item[];
    item: Item;

    newItem = Item;

    constructor(
        private storeService : StoreService,
        private location: Location 
    ){}

    save(newItem : Item): void {
        this.storeService.create(newItem)
        
    }

    goBack(): void {
      this.location.back();
    }
    


    
}