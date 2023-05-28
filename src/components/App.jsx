import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
// ====
import RegisterForm from './RegisterForm/RegisterForm';

export const App = () => {
  return (
    <>
      <RegisterForm />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};
