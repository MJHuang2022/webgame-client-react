import React from "react";

export const Drawdown = (props) => {
  return (
    <div className="w3-container">
      <div className="w3-dropdown-hover">
        <button className="w3-round-button navi-link">
          <i className="fa fa-user" />
        </button>
        <div className="w3-dropdown-content w3-card-4" style={{ right: 0 }}>
          {props.children}
        </div>
      </div>
    </div>
  );
};
