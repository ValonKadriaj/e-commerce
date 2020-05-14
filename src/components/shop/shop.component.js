import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../../pages/collection/collection.component';
import {
  convertCollectionsToMap,
  firestore,
} from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';
import WithSpinner from '../with-spinner/with-spinner.component';
const CollectionsOveriewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.get().then((snapshot) => {
      const covertedMap = convertCollectionsToMap(snapshot);
      console.log(covertedMap);
      updateCollections(covertedMap);
      this.setState({ loading: false });
    });
  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOveriewWithSpinner isLoading={loading} {...props} />
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
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
