import React from "react";
import Play from "../Play";
import "./Lap.sass";

class Lap extends React.Component {
  render() {
    const { lap, playProps } = this.props;

    return (
      <div className="lap" style={{ backgroundImage: `url(${lap})` }}>
        <Play src={playProps.src} />
      </div>
    );
  }
}

export default Lap;
