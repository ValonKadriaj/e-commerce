import shopTypes from './shop.types';
import {
  firestore,
  convertCollectionsToMap,
} from '../../firebase/firebase.utils';

export const fetchCollectionStart = () => ({
  type: shopTypes.FETCH_COLLECTIONS_START,
});
export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: shopTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});
export const fetchCollectionsFailure = (errorMessage) => ({
  type: shopTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});
export const fetchCollectionStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionStart());
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionMap = convertCollectionsToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error)));
  };
};
