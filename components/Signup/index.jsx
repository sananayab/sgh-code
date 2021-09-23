import React from "react";
import "./Signup.sass";

class Signup extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="signup">
        <div className="sign-up-for-free-1 roboto-normal-white-18px">{children}</div>
      </div>
    );
  }
}

export default Signup;
