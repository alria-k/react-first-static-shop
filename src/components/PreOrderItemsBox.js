import React from "react";
import { ProOrderCards } from "./CardsItems";

const preOrderArr = [
  {
    id: 0,
    brand: "Sony",
    body: "4K TV Game Mini Arcade Rocker Console 32GB/64GB",
    price: "29.80",
    image: "./img/cards/1.png",
    onSale: false,
  },
  {
    id: 1,
    brand: "Google",
    body: "Cancelling Headset Music Sport Deep Bass",
    price: "39.80",
    image: "./img/cards/2.png",
    onSale: false,
  },
  {
    id: 2,
    brand: "Apple",
    body: "T500BT Original Wireless Bluetooth Headphone",
    price: "69.80",
    image: "./img/cards/3.png",
    onSale: true,
  },
  {
    id: 3,
    brand: "Toshiba",
    body: "Black Walnut Wood & Aluminum Headphone Stand",
    price: "70.80",
    image: "./img/cards/4.png",
    onSale: true,
  },
  {
    id: 4,
    brand: "BassX",
    body: "Beats Studio3 Wireless Bluetooth Headphones",
    price: "29.80",
    image: "./img/cards/5.png",
    onSale: true,
  },
  {
    id: 5,
    brand: "Konika",
    body: "Marshall MAJOR III Wireless Folding Bluetooth",
    price: "39.80",
    image: "./img/cards/6.png",
    onSale: true,
  },
  {
    id: 6,
    brand: "Apple",
    body: "T500BT Original Wireless Bluetooth Headphone",
    price: "69.80",
    image: "./img/cards/7.png",
    onSale: false,
  },
  {
    id: 7,
    brand: "Toshiba",
    body: "Beats Studio3 Wireless Bluetooth Headphones",
    price: "70.80",
    image: "./img/cards/8.png",
    onSale: false,
  },
  {
    id: 8,
    brand: "BassX",
    body: "4K TV Game Mini Arcade Rocker Console 32GB/64GB",
    price: "29.80",
    image: "./img/cards/9.png",
    onSale: false,
  },
  {
    id: 9,
    brand: "Konika",
    body: "Marshall MAJOR III Wireless Folding Bluetooth",
    price: "39.80",
    image: "./img/cards/10.png",
    onSale: false,
  },
  {
    id: 10,
    brand: "Apple",
    body: "T500BT Original Wireless Bluetooth Headphone",
    price: "69.80",
    image: "./img/cards/11.png",
    onSale: true,
  },
  {
    id: 11,
    brand: "Toshiba",
    body: "Black Walnut Wood & Aluminum Headphone Stand",
    price: "70.80",
    image: "./img/cards/12.png",
    onSale: false,
  },
];

export class PreOrderItemsBox extends React.Component {
  render() {
    return (
      <div className="pre-order__main">
        <h1 className="hero__title">Featured Products For Pre-Order</h1>
        <div className="pre-order__list">
          {preOrderArr.map((obj) => {
            return (
              <ProOrderCards
                key={obj.id}
                body={obj.body}
                brand={obj.brand}
                price={obj.price}
                img={obj.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
