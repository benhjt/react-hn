import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function User({ location }) {
  const [user, setUser] = useState({});
  const username = location.pathname.split('/').slice(1)[1];
  useEffect(() => {
    fetch(`https://node-hnapi.herokuapp.com/user/${username}`).then((response) => response.json()).then((userData) => {
      setUser(userData);
    });
  }, [username]);

  return (
    <table>
      <tbody>
        <tr>
          <td>user:</td>
          <td>{user.id}</td>
        </tr>
        <tr>
          <td>created:</td>
          <td>{user.created_time}</td>
        </tr>
        <tr>
          <td>karma:</td>
          <td>{user.karma}</td>
        </tr>
        <tr>
          <td>about:</td>
          <td dangerouslySetInnerHTML={{ __html: user.about }} />
        </tr>
      </tbody>
    </table>
  );
}

User.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired
};

export default User;
