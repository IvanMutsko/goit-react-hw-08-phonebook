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

    const isNameEmpty = name === '';
    const isNumberValid = /^\d+$/.test(number) && number.length === 10;

    if (isNameEmpty) {
      alert('You have an empty field for name');
      return;
    }

    if (!isNumberValid) {
      alert('Invalid phone number. Please enter a 10-digit number');
      return;
    }

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
        <input name="name" className={css.input} placeholder="Name" />
        <input
          name="number"
          className={css.input}
          placeholder="096-11-11-111"
        />
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
