import { useDispatch, useSelector } from 'react-redux';
import {
  selectLoading,
  selectFilter,
  selectAllContacts,
} from '../redux/contacts/selectors';
import * as operations from '../redux/contacts/operations';

export const useContacts = () => {
  const dispatch = useDispatch();

  const isContactsLoading = useSelector(selectLoading);
  const isContactsFiltered = useSelector(selectFilter);
  const isAllContacts = useSelector(selectAllContacts);

  const fetchContacts = async () => {
    await dispatch(operations.fetchContacts()).unwrap();
  };

  const addContact = async newContact => {
    await dispatch(operations.addContact(newContact)).unwrap();
  };

  const deleteContact = async id => {
    await dispatch(operations.deleteContact(id)).unwrap();
  };

  const updateContact = async data => {
    await dispatch(operations.updateContact(data)).unwrap();
  };

  return {
    isContactsLoading,
    isContactsFiltered,
    isAllContacts,
    fetchContacts,
    addContact,
    deleteContact,
    updateContact,
  };
};
