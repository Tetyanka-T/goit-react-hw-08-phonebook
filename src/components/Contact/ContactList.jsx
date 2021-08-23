import { useSelector, useDispatch } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { contactOperations, contactSelectors } from 'redux/contacts';
import s from 'components/Contact/Contacts.module.css';

const ContactList = () => {
  const contacts = useSelector(contactSelectors.getVisibleContact);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactOperations.deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map(({ name, number, id }) => (
        <li className={s.item} key={id}>
          {name + ': ' + number}
          <IconButton aria-label="delete" onClick={() => onDeleteContact(id)}>
            <DeleteIcon color="primary" />
          </IconButton>
          {/* <Button className={s.button} onClick={() => onDeleteContact(id)}>
            Delete
          </Button> */}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
