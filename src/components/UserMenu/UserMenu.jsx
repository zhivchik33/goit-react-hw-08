import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { apiLogoutUser } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(apiLogoutUser());
  };

  return (
    <div className={css.userMenu}>
      <span className={css.greeting}>Hello, {user.name}</span>
      <button type="button" onClick={handleLogout} className={css.logoutBtn}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
