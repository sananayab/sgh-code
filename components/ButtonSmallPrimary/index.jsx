import React from "react";
import "./ButtonSmallPrimary.sass";

class ButtonSmallPrimary extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="button-small-primary">
        <div className="button-small-primary-1">
          <div className="sign-in">{children}</div>
        </div>
      </div>
    );
  }
}

export default ButtonSmallPrimary;
