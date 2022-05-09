import { NavLink } from 'react-router-dom';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import s from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav>
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
        <PhoneAndroidOutlinedIcon />
        Phone book
      </NavLink>
    </nav>
  );
};

export default Navigation;
