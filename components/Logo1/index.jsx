import React from "react";
import "./Logo1.sass";

class Logo1 extends React.Component {
  render() {
    const { logo1, combinedShape } = this.props;

    return (
      <div className="logo-1" style={{ backgroundImage: `url(${logo1})` }}>
        <img className="combined-shape" src={combinedShape} />
      </div>
    );
  }
}

export default Logo1;
