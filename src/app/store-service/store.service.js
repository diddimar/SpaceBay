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
var http_1 = require('@angular/http');
var platform_browser_1 = require('@angular/platform-browser');
require('rxjs/add/operator/toPromise');
var StoreService = (function () {
    function StoreService(sanitizer, http) {
        this.sanitizer = sanitizer;
        this.http = http;
        this.itemsUrl = 'app/inventory';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        //-------------------------------Admin-------------------//
        this.lastId = 9;
    }
    ;
    StoreService.prototype.getItems = function () {
        return this.http.get(this.itemsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    StoreService.prototype.getItem = function (id) {
        return this.getItems()
            .then(function (k) { return k.find(function (item) { return item.id === id; }); });
    };
    StoreService.prototype.sanitizeUrl = function (youTubeCode) {
        var dangerousVideoUrl = 'https://www.youtube.com/embed/' + youTubeCode;
        return this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
    };
    StoreService.prototype.update = function (item) {
        var url = this.itemsUrl + "/" + item.id;
        return this.http.put(url, JSON.stringify(item), { headers: this.headers })
            .toPromise()
            .then(function () { return item; })
            .catch(this.handleError);
    };
    StoreService.prototype.delete = function (id) {
        var url = this.itemsUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    //-------------------------------Create Item-------------------//
    StoreService.prototype.create = function (name) {
        return this.http
            .post(this.itemsUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    StoreService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    StoreService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizer, http_1.Http])
    ], StoreService);
    return StoreService;
}());
exports.StoreService = StoreService;
//# sourceMappingURL=store.service.js.map