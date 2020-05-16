import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';

import { connect } from 'react-redux';
import CollectionOverviewContainer from '../collection-overview/collection-overview.container';
import CollectionPageContainer from '../../pages/collection/collection.container';

const ShopPage = ({ fetchCollectionStartAsync, match }) => {
  useEffect(() => {
    fetchCollectionStartAsync();
  }, [fetchCollectionStartAsync]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});
export default connect(null, mapDispatchToProps)(ShopPage);
