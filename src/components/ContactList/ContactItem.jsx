import { Text, Delete } from './ContactList.styled';

import { useDeleteContactMutation } from 'redux/contactsApi';

export const ContactItem = ({ name, phone, id }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const onDelete = id => {
    deleteContact(id);
  };

  return (
    <>
      <Text>
        {name}: {phone}
      </Text>
      <Delete type="button" onClick={() => onDelete(id)} disabled={isDeleting}>
        Delete
      </Delete>
    </>
  );
};
