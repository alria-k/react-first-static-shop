import React from "react";
import { Features } from "./Features";
import { PreOrderList } from "./PreOrderItems";

export class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <Features />
        <PreOrderList />
      </main>
    );
  }
}
