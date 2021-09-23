import React from "react";
import "./Logo5.sass";

class Logo5 extends React.Component {
  render() {
    const { logo5, combinedShape } = this.props;

    return (
      <div className="logo-5" style={{ backgroundImage: `url(${logo5})` }}>
        <img className="combined-shape-4" src={combinedShape} />
      </div>
    );
  }
}

export default Logo5;
