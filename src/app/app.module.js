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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var in_memory_data_service_1 = require('./store-service/in-memory-data.service');
require('./rxjs-extensions');
var app_component_1 = require('./app.component');
var main_component_1 = require('./main/main.component');
var item_search_component_1 = require('./search/item-search.component');
var store_list_component_1 = require('./store-list/store-list.component');
var store_grid_component_1 = require('./store-grid/store-grid.component');
var detail_component_1 = require('./detail/detail.component');
var admin_component_1 = require('./admin/admin.component');
var edit_component_1 = require('./edit/edit.component');
var checkout_component_1 = require('./checkout/checkout.component');
var about_component_1 = require('./about/about.component');
var popular_component_1 = require('./popular/popular.component');
var basket_component_1 = require('./basket/basket.component');
var store_service_1 = require('./store-service/store.service');
var basket_service_1 = require('./store-service/basket.service');
var store_routing_module_1 = require('./store-service/store-routing.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                store_routing_module_1.StoreRoutingModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService1),
            ],
            declarations: [
                app_component_1.AppComponent,
                main_component_1.MainComponent,
                item_search_component_1.ItemSearchComponent,
                store_list_component_1.StoreListComponent,
                store_grid_component_1.StoreGridComponent,
                detail_component_1.DetailComponent,
                admin_component_1.AdminComponent,
                edit_component_1.EditComponent,
                checkout_component_1.CheckOutComponent,
                about_component_1.AboutComponent,
                popular_component_1.PopularComponent,
                basket_component_1.BasketComponent,
            ],
            providers: [store_service_1.StoreService, basket_service_1.BasketService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map