import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (name !== '' || number !== '') {
      const newContact = { name, number };
      console.log(newContact);
      dispatch(addContact(name, number));
      form.reset();
      return;
    }
    alert('You have empty fields!');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input name="name" className={css.input} />
      <input name="number" className={css.input} />
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
