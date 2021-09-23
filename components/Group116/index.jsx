import React from "react";
import "./Group116.sass";

class Group116 extends React.Component {
  render() {
    const { followUs, facebook1, twitter1, shape, shgLogo1W } = this.props;

    return (
      <div className="group-116">
        <div className="flex-row-1">
          <div className="follow-us">{followUs}</div>
          <div className="social-media-1">
            <div className="facebook1-1" style={{ backgroundImage: `url(${facebook1})` }}></div>
            <div className="twitter1-1" style={{ backgroundImage: `url(${twitter1})` }}></div>
            <div className="instagram3-1">
              <div className="overlap-group-10 border-2px-white">
                <img className="shape-1" src={shape} />
              </div>
            </div>
          </div>
        </div>
        <img className="shg-logo1-w-1" src={shgLogo1W} />
      </div>
    );
  }
}

export default Group116;
