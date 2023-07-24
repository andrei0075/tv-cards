"use strict";

class Card {
  constructor(src, alt, price, old_price, type, descr, parent) {
    this.src = src;
    this.alt = alt;
    this.price = price;
    this.old_price = old_price;
    this.type = type;
    this.descr = descr;
    this.parent = parent;
    /* можно добовлять любые выражения */
    this.sale = Math.floor((this.price / this.old_price) * 100 - 100);
  }
  render() {
    document.querySelector(this.parent).insertAdjacentHTML(
      "beforeend",

      `
    <div class="card">
      <img class="card__img" src="${this.src}" alt="${this.alt}" />
      <div class="card__sale">${this.sale}%</div>
      <div class="card__price">
      ${this.price}р<span class="card__old-Price"> <s>${this.old_price}р</s> </span>
      </div>
      <div class="card__type">${this.type}</div>
      <div class="card__descr">${this.descr}</div>
    </div>
      
    
          `
    );
  }
}

document.querySelector(".btn").addEventListener("click", function () {
    for (let i = 0; i<3; i++){new Card(
        `img/tv-${i + 1}.png`,
        "tv",
        18800,
        28500,
        "Old collect",
        "best tv for your home",
        ".cards"
      ).render()

    }
});

let copy_of_card = new Card(
  "img/tv-2.png",
  "tv",
  18800,
  28500,
  "Old collect",
  "best tv for your home",
  ".cards"
);

copy_of_card.render();
