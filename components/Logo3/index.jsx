import React from "react";
import "./Logo3.sass";

class Logo3 extends React.Component {
  render() {
    const { logo3, combinedShape } = this.props;

    return (
      <div className="logo-3" style={{ backgroundImage: `url(${logo3})` }}>
        <img className="combined-shape-2" src={combinedShape} />
      </div>
    );
  }
}

export default Logo3;
