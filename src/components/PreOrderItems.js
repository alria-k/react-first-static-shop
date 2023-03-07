import React from "react";
import { MostPopularItemsBox } from "./MostPopularItemsBox";
import { PreOrderItemsBox } from "./PreOrderItemsBox";

export class PreOrderList extends React.Component {
  render() {
    return (
      <section className="pre-order__container">
        <MostPopularItemsBox />
        <PreOrderItemsBox />
      </section>
    );
  }
}
