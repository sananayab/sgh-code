import React from "react";
import "./Left.sass";

class Left extends React.Component {
  render() {
    const {
      excepteurSintOccae,
      facebook1,
      twitter1,
      shape,
      line12,
      spanText,
      spanText2,
      spanText3,
      spanText4,
      spanText5,
      line13,
    } = this.props;

    return (
      <div className="left">
        <div className="flex-row">
          <div className="flex-col">
            <p className="excepteur-sint-occae roboto-normal-white-16px">{excepteurSintOccae}</p>
            <div className="social-media">
              <div className="facebook1" style={{ backgroundImage: `url(${facebook1})` }}></div>
              <div className="twitter1" style={{ backgroundImage: `url(${twitter1})` }}></div>
              <div className="instagram3">
                <div className="overlap-group-9 border-2px-white">
                  <img className="shape" src={shape} />
                </div>
              </div>
            </div>
          </div>
          <img className="line-12" src={line12} />
          <div className="excepteur-sint-occae-1 roboto-normal-white-16px-2">
            <span className="roboto-normal-white-16px">{spanText}</span>
            <span className="span-2 roboto-normal-white-16px">{spanText2}</span>
          </div>
        </div>
        <div className="overlap-group1-2">
          <p className="excepteur-sint-occae-2 roboto-normal-white-16px-2">
            <span className="span-2 roboto-normal-white-16px">{spanText3}</span>
            <span className="roboto-normal-white-16px">{spanText4}</span>
            <span className="span-2 roboto-normal-white-16px">{spanText5}</span>
          </p>
          <img className="line-13" src={line13} />
        </div>
      </div>
    );
  }
}

export default Left;
