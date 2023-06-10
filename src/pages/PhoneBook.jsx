import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from '../components/ContactForm/ContactForm';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';
import Filter from 'components/Filter/Filter';
import { ContactModal } from 'components/ContactModal/ContactModal';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>

      <div>{isLoading && 'Request in progress...'}</div>
      <Filter />
      <ContactModal
        buttonName={'Add new contact'}
        modalTitle={'Add new contact'}
        modalBody={<ContactForm />}
      />
      <ContactList />
    </>
  );
}
