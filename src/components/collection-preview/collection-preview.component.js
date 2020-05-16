import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './collection-preview.style.scss';

const CollectionPreview = ({ title, items, match }) => (
  <div className="collection-preview">
    <Link to={`${match.path}/${title.toLowerCase()}`} className="title">
      {title.toUpperCase()}
    </Link>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
