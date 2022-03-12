import { useEffect } from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import Collection from "../../components/collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner";
import {
  selectIsCollectionsIsLoaded,
  selectIsCollectionsFeching,
} from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(Collection);

const ShopPage = ({
  match,
  fetchCollectionsStartAsync,
  isFetching,
  isCollectionsLoaded,
}) => {
  // conponent did mount
  useEffect(() => {
    fetchCollectionsStartAsync();
    isCollectionsLoaded = selectIsCollectionsIsLoaded;
  }, []);

  return (
    <div className="shop-page">
      <Route
        exact
        path={match.path}
        render={(props) => (
          <CollectionOverviewWithSpinner
            isLoading={!isCollectionsLoaded}
            {...props}
          />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner
            isLoading={!isCollectionsLoaded}
            {...props}
          />
        )}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsCollectionsFeching,
  isCollectionsLoaded: selectIsCollectionsIsLoaded,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
