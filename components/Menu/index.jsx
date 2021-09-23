import React from "react";
import "./Menu.sass";

class Menu extends React.Component {
  render() {
    const { src } = this.props;

    return (
      <div className="menu">
        <img className="shg-logo1-w" src={src} />
      </div>
    );
  }
}

export default Menu;
