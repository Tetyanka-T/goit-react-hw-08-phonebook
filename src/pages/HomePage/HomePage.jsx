import Button from '@material-ui/core/Button';
import s from './HomePage.module.scss';

export default function HomePage() {
  return (
    <>
      <h1 className={s.title}>
        Start working with <br />
        Phone book
      </h1>
      <div className={s.container}>
        <Button variant="contained" href="/register" className={s.button}>
          Create account
        </Button>
        <Button variant="contained" href="/login" className={s.button}>
          Log in
        </Button>
      </div>
    </>
  );
}
