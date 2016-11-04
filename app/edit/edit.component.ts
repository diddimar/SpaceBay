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
    isNumber = false;
    isNewItem = false;

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


    preSave(item){
        this.item.price = +this.item.price;     //fær NaN ef input price er stafa strengur annars to number
        if(this.item.price > 0){
            this.isNumber = true;
            this.save(item);
        }
        else{
            this.isNumber = false;
        }
    }
    save(item : Item): void {
        if (this.item.videoUrl == "" || this.item.videoUrl == null ){ //Til að fela play video takka ef url er ekki til staðar, 
            this.item.videoUrl = "noVideo"                            //líka á newly created item
        }
        this.item.qty = 1;                    //Eining á nýtt item
    
        if (this.item.price > 0){
          this.storeService.update(this.item)
          this.goBack();
          }
    }



    
}