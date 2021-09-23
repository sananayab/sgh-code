import React from "react";
import "./Play.sass";

class Play extends React.Component {
  render() {
    const { src } = this.props;

    return (
      <div className="play">
        <img className="polygon-1" src={src} />
      </div>
    );
  }
}

export default Play;
