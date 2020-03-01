import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Story({ location }) {
  const [story, setStory] = useState({});
  const storyId = location.pathname.split('/').slice(1)[1];
  useEffect(() => {
    fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`).then((response) => response.json()).then((storyData) => {
      setStory(storyData);
    });
  }, [storyId]);

  return (
    <div>
      {story.id}
    </div>
  );
}

Story.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired
};

export default Story;
