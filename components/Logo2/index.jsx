import React from "react";
import "./Logo2.sass";

class Logo2 extends React.Component {
  render() {
    const { logo2, combinedShape } = this.props;

    return (
      <div className="logo-2" style={{ backgroundImage: `url(${logo2})` }}>
        <img className="combined-shape-1" src={combinedShape} />
      </div>
    );
  }
}

export default Logo2;
