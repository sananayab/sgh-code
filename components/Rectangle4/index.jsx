import React from "react";
import "./Rectangle4.sass";

class Rectangle4 extends React.Component {
  render() {
    const { className } = this.props;

    return <div className={`rectangle-4-1 ${className || ""}`}></div>;
  }
}

export default Rectangle4;
