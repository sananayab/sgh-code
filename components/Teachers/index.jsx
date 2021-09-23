import React from "react";
import Signup from "../Signup";
import "./Teachers.sass";

class Teachers extends React.Component {
  render() {
    const { teachers, spanText, spanText2, signupProps } = this.props;

    return (
      <div className="teachers">
        <div className="teachers-1 roboto-medium-blueberry-26px">{teachers}</div>
        <div className="group-4">
          <Signup>{signupProps.children}</Signup>
          <div className="or-log-in">
            <span className="roboto-normal-blueberry-18px">{spanText}</span>
            <span className="span1-2">{spanText2}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Teachers;
