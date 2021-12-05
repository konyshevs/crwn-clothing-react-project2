import React from "react";
import "./collections-overview.styles.scss";

import CollectionPreview from "../collection-preview/collection-preview.component.jsx";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop.selectors.js";

const ColectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {" "}
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(ColectionOverview);
