import { Link } from 'react-router-dom';
import { useEffect } from 'react';
// import { Fab } from '@material-ui/core';
// import AddIcon from '@material-ui/icons/Add';
import { useDispatch, useSelector } from 'react-redux';
import { contactOperations, contactSelectors } from 'redux/contacts';
import { Spinner } from 'components/Loader/Loader';
import ContactList from 'components/Contact/ContactList';
import Filter from 'components/Filter/Filter';
import s from './ContactsPage.module.css';

export default function ContactsPage() {
  const contacts = useSelector(contactSelectors.getContacts);
  const isLoading = useSelector(contactSelectors.getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactOperations.fetchContactsList());
  }, [dispatch]);

  return (
    <div className={s.contacts}>
      <Link to="/contacts/create" className={s.button}>
        Add contact
      </Link>
      {contacts.length > 1 && <Filter />}

      {contacts && <ContactList />}
      {isLoading && <Spinner />}
    </div>
  );
}
