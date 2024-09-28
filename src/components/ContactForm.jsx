import { ErrorMessage, Form, Field, Formik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "../css/ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const Validation = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    onAddContact(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={Validation}
      onSubmit={handleSubmit}>
      <Form className={css.form}>
        <div className={css.input}>
          <label htmlFor="name-id">Name</label>
          <Field type="text" name="name" id="name-id" />
          <ErrorMessage name="name" as="span" />
        </div>
        <div className={css.input}>
          <label htmlFor="number-id">Number</label>
          <Field type="text" name="number" id="number-id" />
          <ErrorMessage name="number" as="span" />
        </div>
        <button type="submit" className={css.button}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
