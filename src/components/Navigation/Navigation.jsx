
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";


const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <nav className={css.navigation}>
        <NavLink to="/" className={`${buildCssClasses} ${css.link}`}>
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts" className={`${buildCssClasses} ${css.link}`}>
            Contacts
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
