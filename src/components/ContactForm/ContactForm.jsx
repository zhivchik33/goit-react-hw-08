
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";


const ContactForm = () => {
  const dispatch = useDispatch();

  const onAddProfile = (formData) => {
    const finalUser = {
      ...formData,
    };

    const action = addContact(finalUser);
    dispatch(action);
  };

  const FormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const nameFieldId = useId();
  const phoneFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log("Form submitted:", values);
    onAddProfile(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={FormSchema}
    >
      <Form className="css.form">
        <label htmlFor={nameFieldId} className={css.label}>
          Name
        </label>
        <Field type="text" name="name" id={nameFieldId} className={css.input} />
        <ErrorMessage
          name="name"
          component="span"
          className={css.errorMessage}
        />
        <label htmlFor={phoneFieldId} className={css.label}>
          Number
        </label>
        <Field
          type="text"
          name="number"
          id={phoneFieldId}
          className={css.input}
        />
        <ErrorMessage
          name="number"
          component="span"
          className={css.errorMessage}
        />
        <button className={css.submitBtn} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
