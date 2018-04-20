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
var store_service_1 = require('../store-service/store.service');
var PopularComponent = (function () {
    function PopularComponent(storeService, router) {
        this.storeService = storeService;
        this.router = router;
    }
    PopularComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storeService.getItems()
            .then(function (k) { return _this.items = k; });
    };
    PopularComponent.prototype.onSelect = function (item) {
        this.selectedItem = item;
        item.views += 1;
        this.storeService.update(item);
        this.router.navigate(['/detail', this.selectedItem.id]);
    };
    PopularComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'popular',
            templateUrl: 'popular.component.html'
        }), 
        __metadata('design:paramtypes', [store_service_1.StoreService, router_1.Router])
    ], PopularComponent);
    return PopularComponent;
}());
exports.PopularComponent = PopularComponent;
//# sourceMappingURL=popular.component.js.map