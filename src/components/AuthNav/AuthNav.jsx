import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";
const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);
const AuthNav = () => (
  <div className={css.authNav}>
    <NavLink to="/login" className={`${buildCssClasses} ${css.link}`}>
      Login
    </NavLink>
    <NavLink to="/register" className={`${buildCssClasses} ${css.link}`}>
      Register
    </NavLink>
  </div>
);

export default AuthNav;
