import React from 'react';

import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  &.active {
    text-decoration: underline;
  }
`;

function Header() {
  const isActive = (path) => {
    return function isActive(match, location) {
      return location.pathname.indexOf(path) !== -1;
    };
  };

  return (
    <nav>
      <Link to="/news/1">
        Logo Here
      </Link>
      <StyledNavLink
        activeClassName="active"
        to="/news/1"
        isActive={isActive('/news')}
      >
        Top
      </StyledNavLink>
      <StyledNavLink
        activeClassName="active"
        to="/newest/1"
        isActive={isActive('/newest')}
      >
        New
      </StyledNavLink>
      <StyledNavLink
        activeClassName="active"
        to="/show/1"
        isActive={isActive('/show')}
      >
        Show
      </StyledNavLink>
      <StyledNavLink
        activeClassName="active"
        to="/ask/1"
        isActive={isActive('/ask')}
      >
        Ask
      </StyledNavLink>
      <StyledNavLink
        activeClassName="active"
        to="/jobs/1"
        isActive={isActive('/jobs')}
      >
        Jobs
      </StyledNavLink>
    </nav>
  )
}

export default Header;
