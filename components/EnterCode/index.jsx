import React from "react";
import "./EnterCode.sass";

class EnterCode extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="enter-code border-1px-blueberry">
        <div className="enter-code-1">{children}</div>
      </div>
    );
  }
}

export default EnterCode;
