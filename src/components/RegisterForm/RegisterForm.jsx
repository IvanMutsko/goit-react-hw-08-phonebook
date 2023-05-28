import { Formik, Field, Form } from 'formik';
import { useRegisterUserMutation } from 'redux/authApi';
import { store } from 'redux/store';

const RegisterForm = () => {
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const handleSubmit = async (userData, { resetForm }) => {
    console.log(userData);

    const response = await registerUser(userData);
    console.log(response);


    resetForm();
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" placeholder="John Rich" type="text" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="example@mail.com"
            type="email"
          />

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" type="password" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
