import React from "react";
import { Features } from "./Features";
import { PreOrderList } from "./PreOrderItems";
import { Categories } from "./Categories";
import { HowItWorks } from "./HowItWorks";
import { Newsletter } from "./Newsletter";

export class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <Features />
        <PreOrderList />
        <Categories />
        <HowItWorks />
        <Newsletter />
      </main>
    );
  }
}
