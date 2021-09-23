import React from "react";
import "./Logo4.sass";

class Logo4 extends React.Component {
  render() {
    const { logo4, combinedShape } = this.props;

    return (
      <div className="logo-4" style={{ backgroundImage: `url(${logo4})` }}>
        <img className="combined-shape-3" src={combinedShape} />
      </div>
    );
  }
}

export default Logo4;
