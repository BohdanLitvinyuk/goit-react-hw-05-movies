import { NavLink, Outlet } from "react-router-dom"
export const Layout=()=>{
    return(
        <div>
              <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/movies">MOVIES</NavLink>
        </li>
      </ul>
      <Outlet/>
        </div>
    )
}