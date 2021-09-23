import React from "react";
import "./Discover.sass";

class Discover extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="discover">
        <div className="discover-more roboto-normal-white-18px">{children}</div>
      </div>
    );
  }
}

export default Discover;
