import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from '../components/ContactForm/ContactForm';
import { useContacts } from 'hooks/useContacts';
import Filter from 'components/Filter/Filter';
import { ContactModal } from 'components/ContactModal/ContactModal';
import { useDisclosure } from '@chakra-ui/react';

export default function Tasks() {
  const { isContactsLoading, fetchContacts } = useContacts();
  const register = useDisclosure();

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>

      <div>{isContactsLoading && 'Request in progress...'}</div>
      <Filter />
      <ContactModal
        {...register}
        buttonName={'Add new contact'}
        modalTitle={'Add new contact'}
        modalBody={<ContactForm onSubmit={register.onClose} />}
      />
      <ContactList />
    </>
  );
}
