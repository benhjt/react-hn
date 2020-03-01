import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Feed({ location }) {
  const [data, setData] = useState([]);
  const feedType = location.pathname.split('/').slice(1)[0]
  useEffect(() => {
    fetch(`https://node-hnapi.herokuapp.com/${feedType}?page=1`).then((response) => {
      return response.json();
    }).then((data) => {
      setData(data);
    });
  }, [feedType]);

  return (
    <div>
      {data.map((item, index) => (
        <div>
          {item.id}
        </div>
      ))}
    </div>
  )
}

Feed.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
};

export default Feed;
