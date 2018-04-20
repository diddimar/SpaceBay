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
var AdminComponent = (function () {
    function AdminComponent(storeService, router) {
        this.storeService = storeService;
        this.router = router;
        this.isAdmin = false;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storeService.getItems()
            .then(function (k) { return _this.items = k; });
    };
    AdminComponent.prototype.onSelect = function (item) {
        this.selectedItem = item;
        this.router.navigate(['/edit', this.selectedItem.id]);
    };
    AdminComponent.prototype.add = function (name) {
        name = name.trim();
        if (!name) {
            return;
        }
        this.storeService.create(name);
        this.storeService.lastId += 1;
        this.router.navigate(['/edit', this.storeService.lastId]);
    };
    AdminComponent.prototype.delete = function (item) {
        var _this = this;
        this.storeService
            .delete(item.id)
            .then(function () {
            _this.items = _this.items.filter(function (h) { return h !== item; });
            if (_this.selectedItem === item) {
                _this.selectedItem = null;
            }
        });
    };
    AdminComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'admin-component',
            templateUrl: './admin.component.html'
        }), 
        __metadata('design:paramtypes', [store_service_1.StoreService, router_1.Router])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map