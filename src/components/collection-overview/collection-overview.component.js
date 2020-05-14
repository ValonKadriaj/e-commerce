import React from 'react';
import './collection-overview.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionForPreview } from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
);
const mapsStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapsStateToProps)(CollectionsOverview);
