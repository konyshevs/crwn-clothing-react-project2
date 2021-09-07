import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, linkUrl, size }) => {
  return (
    <div className={`menu-item ${size ? size : ""}`}>
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
export default MenuItem;
