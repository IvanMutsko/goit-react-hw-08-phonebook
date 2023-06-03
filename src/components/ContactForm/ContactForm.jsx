import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectAllContacts } from 'redux/contacts/selectors';
import css from './ContactForm.module.css';
import { formatPhoneNumber } from 'utils/formatPhoneNumber';

const ContactForm = () => {
  const contacts = useSelector(selectAllContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value;

    const isNameAlreadyExist = contacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase()
    );

    if (isNameAlreadyExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      name,
      number: formatPhoneNumber(number),
    };

    dispatch(addContact(newContact));
    form.reset();
  };

  return (
    <>
      <p className={css.text}>Add new contact</p>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          name="name"
          className={css.input}
          placeholder="Name"
          minLength={3}
        />
        <input
          name="number"
          className={css.input}
          placeholder="096-11-11-111"
          minLength={10}
          maxLength={10}
        />
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
