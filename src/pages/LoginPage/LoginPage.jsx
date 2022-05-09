import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import toast from 'react-hot-toast';
import { authOperations } from 'redux/auth';
import s from './LoginPage.module.scss';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { type, value } }) => {
    switch (type) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const checkValue = email === '' || password === '';

    if (checkValue) {
      return toast.error('Error, empty field!');
    }
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className={s.title}>Log in</h1>

      <form onSubmit={handleSubmit} className={s.form}>
        <TextField
          type="email"
          value={email}
          label="Email"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          type="password"
          value={password}
          label="Password"
          variant="outlined"
          onChange={handleChange}
        />

        {/* <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label> */}

        {/* <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label> */}

        <Button variant="contained" type="submit" className={s.button}>
          To come in
        </Button>
      </form>
    </div>
  );
}
