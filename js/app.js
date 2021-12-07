"use strict";
const db = [
    {
        id: 0,
        name: "Blue and Green Bag",
        desc: "It's a store item",
        price: 129.99,
        img: "media/blue-and-green-bag.jpg",
        top: true,
    },
    {
        id: 1,
        name: "Barbour Loden Coat",
        desc: "It's a store item",
        price: 129.99,
        img: "media/barbour-loden-coat.jpg",
        top: false,
    },
    {
        id: 2,
        name: "Brown Suede Shoes",
        desc: "It's a store item",
        price: 129.99,
        img: "media/brown-suede-shoes.jpg",
        top: true,
    },
    {
        id: 3,
        name: "Roy Bjorkman Fur Coat",
        desc: "It's a store item",
        price: 129.99,
        img: "media/roy-bjorkman-fur-coat.jpg",
        top: false,
    },
    {
        id: 4,
        name: "Steeplechase Hat",
        desc: "It's a store item",
        price: 129.99,
        img: "media/steeplechase-hat.jpg",
        top: true,
    },
    {
        id: 5,
        name: "Shoes",
        desc: "It's a store item",
        price: 129.99,
        img: "media/shoes.jpg",
        top: false,
    },
];

class ShoppingPage {
    constructor() {
        this.sliderBox = document.getElementById("sliderBox");
        this.topBox = document.getElementById("topBox");
        this.topItems = db.filter(e => e.top);
        this.featuredBox = document.getElementById("featuredBox");
        this.populateSlider();
        this.populateTop();
        this.populateFeatured();
    }

    populateSlider() {
        let item = this.topItems[0];
        document.getElementById("sliderFigure").innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="img-fluid slider-img">`;
        sliderBox.innerHTML = `
            <h2 class="slider-title">${item.name}</h2>
            <p class="slider-text">${item.desc}</p>
            <button class="slider-button">shop now</button>
            <ul class="slider-button-list">
                <li class="slider-button-item"><input type="radio" class="slider-radio" name="slider" value="" checked></li>
                <li class="slider-button-item"><input type="radio" class="slider-radio" name="slider" value=""></li>
                <li class="slider-button-item"><input type="radio" class="slider-radio" name="slider" value=""></li>
                <li class="slider-button-item"><input type="radio" class="slider-radio" name="slider" value=""></li>
                <li class="slider-button-item"><input type="radio" class="slider-radio" name="slider" value=""></li>
            </ul>`;
    }

    populateTop() {
        this.topItems.forEach((e) => {
            this.topBox.insertAdjacentHTML('beforeend', `
                <figure class="product-top">
                    <img src="${e.img}" alt="${e.name}" class="img-fluid">
                    <figcaption>
                        ${e.name}
                        <button>shop</button>
                    </figcaption>
                </figure>`);
        });
    }

    populateFeatured() {
        return;
    }
}

new ShoppingPage();
