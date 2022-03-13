import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsIsLoaded } from "../../redux/shop/shop.selectors";

import Collection from "./collection.component";
import WithSpinner from "../with-spinner/with-spinner";

const mapPropsToState = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsIsLoaded(state),
});

const CollectionContainer = compose(
  connect(mapPropsToState),
  WithSpinner
)(Collection);

export default CollectionContainer;
