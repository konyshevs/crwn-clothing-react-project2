import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsFeching } from "../../redux/shop/shop.selectors";

import ColectionOverview from "./collections-overview.component";
import WithSpinner from "../with-spinner/with-spinner";

const mapPropsToState = createStructuredSelector({
  isLoading: selectIsCollectionsFeching,
});

const CollectionOverviewContainer = compose(
  connect(mapPropsToState),
  WithSpinner
)(ColectionOverview);

export default CollectionOverviewContainer;
