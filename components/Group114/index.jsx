import React from "react";
import Left from "../Left";
import "./Group114.sass";

class Group114 extends React.Component {
  render() {
    const { line, leftProps } = this.props;

    return (
      <div className="group-114">
        <img className="line" src={line} />
        <Left {...leftProps} />
      </div>
    );
  }
}

export default Group114;
