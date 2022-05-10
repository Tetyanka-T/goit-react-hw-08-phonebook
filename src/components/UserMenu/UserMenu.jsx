import { NavLink } from 'react-router-dom';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import s from './UserMenu.module.scss';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={s.heder}>
      <NavLink
        exact
        to="/contacts"
        className={s.link}
        activeClassName={s.activeLink}
      >
        <div className={s.iconContainer}>
          <ContactPhoneIcon />
          <span className={s.contact}>Contacts</span>
        </div>
      </NavLink>
      <div className={s.containerUser}>
        <span className={s.text}>Welcome, {name}</span>
        <button
          variant="contained"
          type="button"
          onClick={() => dispatch(authOperations.logOut())}
          className={s.button}
        >
          Exit
        </button>
      </div>
    </div>
  );
}
