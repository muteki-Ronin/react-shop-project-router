import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="light-blue lighten-1">
      <div className="nav-wrapper">
        <NavLink to="/" className="brand-logo">
          RECT Shop
        </NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
