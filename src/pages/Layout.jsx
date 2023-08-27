import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;
  textdecoration: 'none';
  &.active {
    color: tomato;
    extdecoration: 'none';
  }
`;
export const Layout = () => {
  return (
    <div>
      <ul className="navLinkList">
        <li>
          <StyledLink to="/" className="navLinkItem">
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/movies" className="navLinkItem">
            Movies
          </StyledLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
