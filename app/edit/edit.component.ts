import { Component } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { StoreService } from '../store-service/store.service';
import { Item }        from '../store-service/item';

@Component({
    moduleId: module.id,
    selector: 'edit-component',
    templateUrl: './edit.component.html'
})

export class EditComponent {

    items: Item[];
    selectedItem: Item;
    item: Item;

    constructor(
        private storeService : StoreService,
        private route: ActivatedRoute,
        private location: Location 
    ){}

    ngOnInit(): void {
      this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.storeService.getItem(id)
      .then(k => this.item = k);
    });
    }

    goBack(): void {
      this.location.back();
    }
    
    save(): void {
    this.storeService.update(this.item)
    .then(() => this.goBack());
  }


    
}