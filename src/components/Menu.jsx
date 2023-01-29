import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "red", textDecoration: "none" } : {}
        }
        to="."
        end
      >
        Home
      </NavLink>
      <NavLink to="courses">My Frends</NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "Link")}
        to="about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "Link")}
        to="contacts"
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Menu;
