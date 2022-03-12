import React from "react";
import "./collection-preview.styles.scss";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items, history, match, routeName }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">
        <span
          onClick={() => history.push(`${match.path}/${routeName}`)}
          className="title-text"
        >
          {title.toUpperCase()}
        </span>
      </h1>
      <div className="preview">
        {items
          .filter((_, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);
