import React from "react";
import { useFormik } from "formik";
const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  console.log(formik.values);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            name="name"
          ></input>
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
            name="email"
          ></input>
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="text"
            onChange={formik.handleChange}
            value={formik.values.password}
            name="password"
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
