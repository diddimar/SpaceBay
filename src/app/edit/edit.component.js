"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var store_service_1 = require('../store-service/store.service');
var EditComponent = (function () {
    function EditComponent(storeService, route, location) {
        this.storeService = storeService;
        this.route = route;
        this.location = location;
        this.isNumber = false;
        this.isNewestItem = false;
        this.itemId = 0;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.storeService.getItem(id)
                .then(function (k) { return _this.item = k; });
            _this.itemId = id;
            _this.checkIfNewest();
        });
    };
    EditComponent.prototype.goBack = function () {
        this.location.back();
    };
    EditComponent.prototype.checkIfNewest = function () {
        if (this.storeService.lastId == this.itemId && this.itemId > 9) {
            this.isNewestItem = true;
        }
        else {
            this.isNewestItem = false;
        }
    };
    EditComponent.prototype.preSave = function (item) {
        this.item.price = +this.item.price; //fær NaN ef input price er stafa strengur annars to number
        if (this.item.price > 0) {
            this.isNumber = true;
            this.save(item);
        }
        else {
            this.isNumber = false;
        }
    };
    EditComponent.prototype.save = function (item) {
        if (this.item.videoUrl == "" || this.item.videoUrl == null) {
            this.item.videoUrl = "noVideo"; //líka á newly created item
        }
        this.item.qty = 1; //Eining á nýtt item
        if (this.item.price > 0) {
            this.storeService.update(this.item);
            this.goBack();
        }
    };
    EditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'edit-component',
            templateUrl: './edit.component.html'
        }), 
        __metadata('design:paramtypes', [store_service_1.StoreService, router_1.ActivatedRoute, common_1.Location])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;
//# sourceMappingURL=edit.component.js.map