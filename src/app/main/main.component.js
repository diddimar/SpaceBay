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
var MainComponent = (function () {
    function MainComponent(router) {
        this.router = router;
        this.password = "";
        this.backgroundLink = "";
    }
    MainComponent.prototype.passwordCheck = function () {
        if (this.password == "admin") {
            this.router.navigate(['/admin']);
            this.password = "";
        }
        this.password = "";
    };
    MainComponent.prototype.backgroundToggle = function () {
        if (this.backgroundLink == "") {
            this.backgroundLink = "app/img/backgr.jpg";
        }
        else if (this.backgroundLink == "app/img/backgr.jpg") {
            this.backgroundLink = "app/img/backgr1.jpg";
        }
        else if (this.backgroundLink == "app/img/backgr1.jpg") {
            this.backgroundLink = "";
        }
    };
    MainComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'main-component',
            templateUrl: './main.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map