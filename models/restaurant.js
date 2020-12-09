"use strict";
var Restaurant = /** @class */ (function () {
    function Restaurant(idRestaurant, name, address, lat, lng, kindFood) {
        this.idRestaurant = idRestaurant;
        this.name = name;
        this.address = address;
        this.lat = lat;
        this.lng = lng;
        this.kindFood = [];
    }
    Object.defineProperty(Restaurant.prototype, "setKindFood", {
        //SETTERS
        set: function (kindFood) {
            this.kindFood = [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Restaurant.prototype, "getName", {
        //GETTERS
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Restaurant.prototype, "getAddress", {
        get: function () {
            return this.address;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Restaurant.prototype, "getKindFood", {
        get: function () {
            return this.kindFood;
        },
        enumerable: false,
        configurable: true
    });
    return Restaurant;
}());
