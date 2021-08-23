// import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import s from './HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <h1 className={s.title}>
        Start working with <br />
        Phone book
      </h1>
      <div className={s.container}>
        <Button variant="contained" color="primary" href="/register">
          {/* <Link className={s.button} to="/register"> */}
          Create account
          {/* </Link> */}
        </Button>
        <Button variant="contained" color="primary" href="/login">
          {/* <Link to="/login"> */}
          Log in
          {/* </Link> */}
        </Button>
      </div>
    </>
  );
}
