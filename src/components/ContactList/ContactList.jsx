import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/filter/selectors';
import { sortArrOfObj } from 'utils/sortArrOfObj';
import { Contact } from '../Contact/Contact';
import { selectAllContacts } from 'redux/contacts/selectors';
import { Container, List, ListItem, Text } from '@chakra-ui/react';

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
      <Container>
        <Text>
          Sorry, but you don't have any contacts yet. Add your first contact.
        </Text>
      </Container>
    );
  }

  return (
    <Container mb={20}>
      <List spacing={4}>
        {sortedContactsData.map(({ id, name, number }) => (
          <ListItem key={id}>
            <Contact name={name} number={number} id={id} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ContactList;
