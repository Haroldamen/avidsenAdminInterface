import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

/*
const validate = (values) => {
  // values.email values.password  values.confirmPassword

  let errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (!values.password) {
    errors.password = "Required";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  }

  return errors;
};
*/

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password must match"
  ),
});

function LoginForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    //validate,
  });

  console.log("Visited fiels", formik.touched);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="email"> E-mail </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Adresse e-mail"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error"> {formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="password"> Mot de passe </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Mot de passe"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error"> {formik.errors.password}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="confirmPassword"> Confirmer le mot de passe</label>
          <input
            type="confirmPassword"
            id="confirmPassword"
            name="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            placeholder="Confirmer le mot de passe"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="error"> {formik.errors.confirmPassword}</div>
          ) : null}
        </div>

        <button type="submit">Seconnecter</button>
      </form>
    </div>
  );
}

export default LoginForm;
