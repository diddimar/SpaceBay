import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';

import { StoreService } from '../store-service/store.service';
import { Item }        from '../store-service/item';

@Component({
    moduleId: module.id,
    selector: 'admin-component',
    templateUrl: './admin.component.html'
})

export class AdminComponent implements OnInit{

    items: Item[];
    selectedItem: Item;
    item: Item;

    constructor(
        private storeService : StoreService,
        private router : Router
    ){}
    
    ngOnInit(): void {
        this.storeService.getItems()
        .then(k => this.items = k)
    }

    onSelect(item: Item): void {
    this.selectedItem = item;
    this.router.navigate(['/edit', this.selectedItem.id]);
    }
    
    
    delete(item: Item): void {
    this.storeService
      .delete(item.id)
      .then(() => {
        this.items = this.items.filter(h => h !== item);
        if (this.selectedItem === item) { this.selectedItem = null; }
      });
    }

}