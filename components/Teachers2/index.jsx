import React from "react";
import Discover from "../Discover";
import "./Teachers2.sass";

class Teachers2 extends React.Component {
  render() {
    const { administrators, spanText, spanText2, discoverProps } = this.props;

    return (
      <div className="teachers-2">
        <div className="administrators roboto-medium-blueberry-26px">{administrators}</div>
        <div className="group-4-1">
          <Discover>{discoverProps.children}</Discover>
          <div className="or-request-a-quote">
            <span className="roboto-normal-blueberry-18px">{spanText}</span>
            <span className="span1-3 roboto-normal-blueberry-18px">{spanText2}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Teachers2;
