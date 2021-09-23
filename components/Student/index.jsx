import React from "react";
import EnterCode from "../EnterCode";
import "./Student.sass";

class Student extends React.Component {
  render() {
    const { students, toJoinALesson, enterCodeProps } = this.props;

    return (
      <div className="student">
        <div className="students roboto-medium-blueberry-26px">{students}</div>
        <EnterCode>{enterCodeProps.children}</EnterCode>
        <div className="to-join-a-lesson roboto-normal-blueberry-18px">{toJoinALesson}</div>
      </div>
    );
  }
}

export default Student;
