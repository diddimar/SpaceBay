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
var basket_service_1 = require('../store-service/basket.service');
var DetailComponent = (function () {
    function DetailComponent(storeService, basketService, route, router, location) {
        this.storeService = storeService;
        this.basketService = basketService;
        this.route = route;
        this.router = router;
        this.location = location;
        this.numberOfItems = 0;
        this.totalPrice = 0;
        this.autoPlay = "?autoplay=1";
        this.trailerPlaying = false;
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.storeService.getItem(id)
                .then(function (k) { return _this.item = k; });
            _this.getTotalPrice();
            _this.getTotalNumberOfItems();
        });
    };
    DetailComponent.prototype.buy = function (item) {
        this.selectedItem = item;
        this.basketService.addToBasket(item);
        this.getTotalNumberOfItems();
        this.getTotalPrice();
    };
    DetailComponent.prototype.watchVideo = function () {
        this.videoUrl = this.storeService.sanitizeUrl(this.item.videoUrl + this.autoPlay);
        this.trailerPlaying = true;
    };
    DetailComponent.prototype.stopTrailer = function () {
        this.trailerPlaying = false;
    };
    DetailComponent.prototype.viewBasket = function () {
        this.router.navigate(['/basket']);
    };
    DetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    DetailComponent.prototype.getTotalPrice = function () {
        this.totalPrice = this.basketService.totalPrice;
    };
    DetailComponent.prototype.getTotalNumberOfItems = function () {
        this.numberOfItems = this.basketService.numberOfItems;
    };
    DetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'detail-component',
            templateUrl: './detail.component.html'
        }), 
        __metadata('design:paramtypes', [store_service_1.StoreService, basket_service_1.BasketService, router_1.ActivatedRoute, router_1.Router, common_1.Location])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=detail.component.js.map