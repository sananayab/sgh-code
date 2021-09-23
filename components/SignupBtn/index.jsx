import React from "react";
import "./SignupBtn.sass";

class SignupBtn extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`signup-btn border-1px-white ${className || ""}`}>
        <div className="sign-up-for-free roboto-medium-cararra-19px">{children}</div>
      </div>
    );
  }
}

export default SignupBtn;
