import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import toast from 'react-hot-toast';

import { contactOperations, contactSelectors } from 'redux/contacts';
import s from 'components/Form/Form.module.scss';

function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(contactSelectors.getContacts);
  const isLoading = useSelector(contactSelectors.getIsLoading);

  const checkContact = (contacts, name) => {
    const searchSameName = contacts.map(contact => contact.name).includes(name);

    if (searchSameName) {
      toast.error(`${name} is already in contacts`);
      return searchSameName;
    }
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const sameContact = checkContact(contacts, name, number);

    if (sameContact) return;

    dispatch(contactOperations.createContact({ name, number }));

    reset();

    toast.success('Done!');
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={s.formContainer}>
      {isLoading && <Redirect to="/contacts" />}
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={s.label}>
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}

export default Form;
