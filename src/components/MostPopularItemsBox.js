import React from "react";
import { CardsItems } from "./CardsItems";

const mostPopularItemObj = [
  {
    id: 0,
    body: "4K TV Game Mini Arcade Rocker Console 32GB/64GB",
    price: "29.80",
    image: "./img/mostPopularItems/1.png",
  },
  {
    id: 1,
    body: "Cancelling Headset Music Sport Deep Bass",
    price: "420.00",
    image: "./img/mostPopularItems/2.png",
  },
  {
    id: 2,
    body: "T500BT Original Wireless Bluetooth Headphone Deep",
    price: "96.50",
    image: "./img/mostPopularItems/3.png",
  },
];

export class MostPopularItemsBox extends React.Component {
  render() {
    return (
      <div className="popular-items__container">
        {mostPopularItemObj.map((obj) => {
          return (
            <CardsItems
              key={obj.id}
              image={obj.image}
              body={obj.body}
              price={obj.price}
            />
          );
        })}
      </div>
    );
  }
}
