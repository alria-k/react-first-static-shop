import React from "react";
import { Nav } from "./Nav";

export class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Nav />
      </div>
    );
  }
}
