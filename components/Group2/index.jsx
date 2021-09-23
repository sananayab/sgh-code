import React from "react";
import "./Group2.sass";

class Group2 extends React.Component {
  render() {
    const { alwaysSeekKnowledg, knowledgeIsPower } = this.props;

    return (
      <div className="group-2">
        <h1 className="always-seek-knowledg-1">{alwaysSeekKnowledg}</h1>
        <div className="knowledge-is-power">{knowledgeIsPower}</div>
      </div>
    );
  }
}

export default Group2;
