import React from "react";
import { withRouter } from "react-router";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, linkUrl, size, history, match }) => {
  return (
    <div
      className={`menu-item ${size ? size : ""}`}
      onClick={() => history.push(match.url + linkUrl)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <p className="subtitle">SHOP NOW</p>
      </div>
    </div>
  );
};
export default withRouter(MenuItem);
