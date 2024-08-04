import { NavLink } from "react-router-dom";

function NavBar({ toggleNavBar }) {
  const data = ["home", "about", "protfolio", "contact"];

  return (
    <nav className="nav">
      <div className="nav-inner">
        <ul>
          {data.map((val, i) => (
            <li onClick={toggleNavBar} key={i}>
              <NavLink to={`/${val}`} className="nav-item link-item">
                {val}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
