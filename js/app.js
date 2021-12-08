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
        this.cartTotal = document.getElementById("cartTotal");
        this.cartTotal.innerText = "$0";
        this.cart = [];
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
                        <button>add to cart</button>
                    </figcaption>
                </figure>`);
        });
    }

    populateFeatured() {
        db.forEach((e) => {
            this.featuredBox.insertAdjacentHTML('beforeend', `
                <figure class="featured-product">
                    <img src="${e.img}" alt="${e.name}" class="img-fluid">
                    <figcaption>
                        ${e.name}
                        <div class="price">
                            ${e.price}
                            <button data-id=${e.id}>add to cart</button>
                        </div>
                    </figcaption>
                </figure>
            `);
            this.featuredBox.querySelector('figure:last-child .price button')
                .addEventListener('click', this.addItem.bind(this));
        });
    }

    /*
     * If the item is not in the cart, push the item to the cart.
     * If the item is in the cart, increment the quantity.
     */
    addItem(event) {
        let id = event.target.dataset.id;
        let dupe = this.cart.filter((e) => e.id === id);
        switch (dupe.length) {
            case 0:
                this.cart.push({id: id, qty: 1});
                break;
            case 1:
                this.cart.forEach((e) => {
                    if (e.id === id) e.qty++;
                });
                break;
            default:
                console.log("error in addItem: multiple duplicates in cart.");
                break;
        }
    }
}

new ShoppingPage();
