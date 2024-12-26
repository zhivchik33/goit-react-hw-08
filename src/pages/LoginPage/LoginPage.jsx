import AppBar from "../../components/AppBar/AppBar";
import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./LoginPage.module.css";
import { LoginUserSchema } from "../../utils/schemas";
import { useDispatch } from "react-redux";
import { apiLoginUser } from "../../redux/auth/operations";

const INITIAL_VALUES = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(apiLoginUser(values));
    console.log("Form submitted with values:", values);
    actions.resetForm();
  };

  return (
    <div>
      <AppBar />
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={LoginUserSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            <span>Email:</span>
            <Field
              type="text"
              name="email"
              className={css.input}
              placeholder="example.email@example.com"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="email"
              component="span"
            />
          </label>
          <label className={css.label}>
            <span>Password:</span>
            <Field
              type="password"
              name="password"
              className={css.input}
              placeholder="Enter your password"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="password"
              component="span"
            />
          </label>

          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
