import {Link,NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
    <div className="nav">
      <ul className="navBar">
        <li className="navItem">
          <NavLink to="/" className="navLink" >Home</NavLink>
        </li >
        <li className="navItem">
          <NavLink to="/user" className="navLink">User</NavLink>
        </li>
        <li className="navItem">
          <NavLink to="/product" className="navLink">Book</NavLink>
        </li>
      </ul>
    </div>
    </>
  );
};
export default Header;
