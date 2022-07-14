import React from "react";
import { useFormik } from "formik";

//step1
const initialValues = {
  name: "",
  email: "",
  password: "",
};
//step2
const onSubmit = (values) => console.log(values);

//step3 : validation
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "name is required!";
  }
  if (!values.email) {
    errors.email = "email is required!";
  }
  if (!values.password) {
    errors.password = "password is required!";
  }
  return errors;
};

const SignUpForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  //   console.log(formik.values);

  //   const submitHandler = (e) => {
  //     e.preventDefault();
  //     console.log("hello");
  console.log("visied", formik.touched);
  //   };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            name="name"
          ></input>
          {formik.errors.name && formik.touched.name && (
            <p className="error">{formik.errors.name}</p>
          )}
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            name="email"
          ></input>
          {formik.errors.email && formik.touched.email && (
            <p className="error">{formik.errors.email}</p>
          )}
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="text"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            name="password"
          ></input>
          {formik.errors.password && formik.touched.password && (
            <p className="error">{formik.errors.password}</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
