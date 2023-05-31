import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/filter/selectors';
import { sortArrOfObj } from 'utils/sortArrOfObj';
import { Contact } from '../Contact/Contact';
import { selectAllContacts } from 'redux/contacts/selectors';
import css from './ContactList.module.css';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(selectAllContacts);

  const filteringContactsList = () => {
    if (!contacts) return [];
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  const filteredContactsData = filteringContactsList();
  const sortedContactsData = sortArrOfObj(filteredContactsData);

  if (sortedContactsData.length === 0) {
    return (
      <p>Sorry, but you don't have any contacts yet. Add your first contact.</p>
    );
  }

  return (
    <ul className={css.list}>
      {sortedContactsData.map(({ id, name, phone }) => (
        <li key={id}>
          <Contact name={name} phone={phone} id={id} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
