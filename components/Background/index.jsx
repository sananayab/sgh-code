import React from "react";
import "./Background.sass";

class Background extends React.Component {
  render() {
    const { background, background2 } = this.props;

    return (
      <div className="background-1" style={{ backgroundImage: `url(${background})` }}>
        <img className="background-2" src={background2} />
      </div>
    );
  }
}

export default Background;
