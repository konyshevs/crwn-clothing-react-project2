import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import {
  db,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import Collection from "../../components/collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner";

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(Collection);

const ShopPage = ({ match, updateCollections }) => {
  const [loading, setLoading] = useState(true);

  const unsubscribeFromSnapshot = null;

  //componet did mount
  useEffect(() => {
    const collectionRef = collection(db, "collections");
    onSnapshot(collectionRef, async (snapshot) => {
      updateCollections(convertCollectionsSnapshotToMap(snapshot));
      setLoading(false);
    });
    // return ()=>{}
  }, []);

  //component will unmount
  useEffect(() => () => {}, []);

  return (
    <div className="shop-page">
      <Route
        exact
        path={match.path}
        render={(props) => (
          <CollectionOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
