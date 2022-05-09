import { useSelector } from 'react-redux';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { authSelectors } from 'redux/auth';
import s from './Header.module.scss';

export default function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.header}>
      {isLoggedIn ? <UserMenu /> : <Navigation />}
    </header>
  );
}
