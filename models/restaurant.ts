class Restaurant {
    idRestaurant: number;
    name: string;
    address: string;
    lat: number;
    lng: number;
    kindFood: Array<string>;

    constructor(idRestaurant: number, name: string, address: string, lat: number, lng: number, kindFood: Array<string>) {
        this.idRestaurant = idRestaurant;
        this.name = name;
        this.address = address;
        this.lat = lat;
        this.lng = lng;
        this.kindFood = [];
    }

    //SETTERS
    set setKindFood(kindFood: Array<string>) {
        this.kindFood = [];
    }

    //GETTERS
    get getName() {
        return this.name;
    }

    get getAddress() {
        return this.address;
    }

    get getKindFood() {
        return this.kindFood;
    }
}