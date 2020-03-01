import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import FeedItem from '../FeedItem';

function Feed({ location }) {
  const [data, setData] = useState([]);
  const feedType = location.pathname.split('/').slice(1)[0];
  useEffect(() => {
    fetch(`https://node-hnapi.herokuapp.com/${feedType}?page=1`).then((response) => response.json()).then((feedData) => {
      setData(feedData);
    });
  }, [feedType]);

  return (
    <div>
      {data.map((item, index) => (
        <FeedItem item={item} index={index} key={item.id} />
      ))}
    </div>
  );
}

Feed.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired
};

export default Feed;
