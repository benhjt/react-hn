import React from 'react';
import PropTypes from 'prop-types';


import { Link } from 'react-router-dom';

function FeedItem({ item, index }) {
  return (
    <div>
      <div>
        {index}
      </div>
      <div>
        <div>
          <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a> (<a href={item.domain} target="_blank" rel="noopener noreferrer">{item.domain}</a>)
        </div>
        <div>
          {item.points} points by <Link to={`/user/${item.user}`}>{item.user}</Link> {item.time_go} | <Link to={`/story/${item.id}`}>{item.comments_count} comments</Link>
        </div>
      </div>
    </div>
  );
}

FeedItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    points: PropTypes.number,
    user: PropTypes.string,
    time: PropTypes.number,
    time_ago: PropTypes.string,
    comments_count: PropTypes.number,
    type: PropTypes.string,
    url: PropTypes.string,
    domain: PropTypes.string
  }).isRequired,
  index: PropTypes.number.isRequired
};

export default FeedItem;
