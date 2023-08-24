import { NavLink, Outlet } from "react-router-dom"

import styled from 'styled-components';

const StyledLink= styled(NavLink)`
color:black;
textDecoration:'none';
&.active{
  color:tomato;
  extDecoration:'none';
}
`;
export const Layout=()=>{
    return(
        <div>
              <ul className="navLinkList">
        <li >
          <StyledLink to="/" className="navLinkItem">Home</StyledLink>
        </li>
        <li > 
          <StyledLink to="/movies" className="navLinkItem" >Movies</StyledLink>
        </li>
      </ul>
      <Outlet/>
        </div>
    )
}