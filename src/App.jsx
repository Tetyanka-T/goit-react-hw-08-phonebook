import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Container from '@material-ui/core/Container';
// import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import { Spinner } from 'components/Loader/Loader';
import { authOperations, authSelectors } from 'redux/auth';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const CreateContactPage = lazy(() =>
  import('./pages/CreateContactPage/CreateContactPage'),
);
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));

export default function App() {
  const dispatch = useDispatch();

  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchCurrentUser,
  );
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Container maxWidth="md">
        <Header />

        <Switch>
          <Suspense fallback={<Spinner />}>
            <PublicRoute path="/" exact>
              <HomePage />
            </PublicRoute>

            <PublicRoute
              exact
              path="/register"
              redirectTo="/contacts"
              restricted
            >
              <RegisterPage />
            </PublicRoute>
            <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
              <LoginPage />
            </PublicRoute>

            <PrivateRoute exact path="/contacts" redirectTo="/login">
              <ContactsPage />
            </PrivateRoute>

            <PrivateRoute path="/contacts/create">
              <CreateContactPage />
            </PrivateRoute>
          </Suspense>
        </Switch>
        <Toaster position="top-center" />
      </Container>
    )
  );
}
