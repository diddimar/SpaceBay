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
var store_list_component_1 = require('../store-list/store-list.component');
var store_grid_component_1 = require('../store-grid/store-grid.component');
var admin_component_1 = require('../admin/admin.component');
var basket_component_1 = require('../basket/basket.component');
var edit_component_1 = require('../edit/edit.component');
var detail_component_1 = require('../detail/detail.component');
var checkout_component_1 = require('../checkout/checkout.component');
var popular_component_1 = require('../popular/popular.component');
var about_component_1 = require('../about/about.component');
var routes = [
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    { path: 'list', component: store_list_component_1.StoreListComponent },
    { path: 'grid', component: store_grid_component_1.StoreGridComponent },
    { path: 'admin', component: admin_component_1.AdminComponent },
    { path: 'basket', component: basket_component_1.BasketComponent },
    { path: 'edit/:id', component: edit_component_1.EditComponent },
    { path: 'detail/:id', component: detail_component_1.DetailComponent },
    { path: 'checkOut', component: checkout_component_1.CheckOutComponent },
    { path: 'popular', component: popular_component_1.PopularComponent },
    { path: 'about', component: about_component_1.AboutComponent },
];
var StoreRoutingModule = (function () {
    function StoreRoutingModule() {
    }
    StoreRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], StoreRoutingModule);
    return StoreRoutingModule;
}());
exports.StoreRoutingModule = StoreRoutingModule;
//# sourceMappingURL=store-routing.module.js.map