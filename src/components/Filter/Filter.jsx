import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/contact-slice';
import { contactSelectors } from 'redux/contacts';
import s from 'components/Filter/Filter.module.css';

const Filter = () => {
  const value = useSelector(contactSelectors.getFilter);

  const dispatch = useDispatch();

  const onChange = e => dispatch(changeFilter(e.currentTarget.value));
  return (
    <div className={s.container}>
      <h3 className={s.title}>Find contacts by name</h3>
      <Input type="text" value={value} onChange={onChange}>
        <SearchIcon />
      </Input>
      {/* <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      /> */}
    </div>
  );
};

export default Filter;
