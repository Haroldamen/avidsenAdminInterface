import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const initialValues = {
  email: "",
  password: "",
};

const onSubmit = async (values) => {
  try {
    await axios.post("http://donkey.athemium.com", { values });
  } catch (err) {
    console.log(err.message);
  }
  console.log("Form data", values);
};

const validationSchema = Yup.object({
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

function LoginForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <h1 className="loginTitle">Mon espace Domus</h1>
        </div>
        <div className="form-control">
          {/*<label htmlFor="email"> E-mail </label>*/}
          <Field
            type="text"
            id="email"
            name="email"
            placeholder="Adresse e-mail"
          />
          <ErrorMessage name="email" />
        </div>

        <div className="form-control">
          {/*<label htmlFor="password"> Mot de passe </label>*/}
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="Mot de passe"
          />
          <ErrorMessage name="password" />
        </div>

        <button type="submit" className="form-control">
          Seconnecter
        </button>
      </Form>
    </Formik>
  );
}

export default LoginForm;
