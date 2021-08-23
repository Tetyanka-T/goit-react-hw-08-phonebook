import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <>
      <NavLink
        exact
        to="/contacts"
        className={s.link}
        activeClassName={s.activeLink}
      >
        <ContactPhoneIcon />
        <span className={s.contact}>Contacts</span>
      </NavLink>
      <div className={s.container}>
        <span className={s.text}>Welcome, {name}</span>
        <Button
          variant="contained"
          color="primary"
          type="button"
          onClick={() => dispatch(authOperations.logOut())}
        >
          Exit
        </Button>
      </div>
    </>
  );
}
