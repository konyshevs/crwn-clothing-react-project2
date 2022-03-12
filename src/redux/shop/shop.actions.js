import ShopActionTypes from "./shop.types";
import {
  convertCollectionsSnapshotToMap,
  db,
} from "../../firebase/firebase.utils";

import { collection, onSnapshot } from "firebase/firestore";

export const fetchCollectionsStart = () => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
  };
};

export const fetchCollectionsSuccess = (collectionsMap) => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
  };
};

export const fetchCollectionsFailure = (errorMassage) => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMassage,
  };
};

export const fetchCollectionsStartAsync = () => (dispatch) => {
  const collectionRef = collection(db, "collections");
  dispatch(fetchCollectionsStart());
  onSnapshot(collectionRef, async (snapshot) => {
    try {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    } catch (e) {
      dispatch(fetchCollectionsFailure(e.message));
    }
  });
};
