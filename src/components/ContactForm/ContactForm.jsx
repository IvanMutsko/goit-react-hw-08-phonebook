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
      dispatch(addContact(newContact));
      form.reset();
      return;
    }
    alert('You have empty fields!');
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
