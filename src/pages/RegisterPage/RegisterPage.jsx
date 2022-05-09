import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { authOperations } from 'redux/auth';
import s from './RegisterPage.module.scss';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { type, value } }) => {
    switch (type) {
      case 'text':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className={s.title}>Create account</h1>

      <form onSubmit={handleSubmit} className={s.form}>
        <TextField
          type="text"
          value={name}
          label="Name"
          variant="outlined"
          onChange={handleChange}
        />
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
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label> */}

        <Button type="submit" variant="contained" className={s.button}>
          Register now
        </Button>
      </form>
    </div>
  );
}
