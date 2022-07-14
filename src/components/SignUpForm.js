import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
//step1
const initialValues = {
  name: "",
  email: "",
  password: "",
  phoneNumber: "",
  passwordConfirmation: "",
  Gender: "",
};
//step2
const onSubmit = (values) => console.log(values);
//step3 with yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Email format is not correct")
    .required("Email is required!"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  phoneNumber: Yup.string()
    .required("Phone Number is required!")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    )
    .min(11, "to short")
    .max(11, "to long"),

  passwordConfirmation: Yup.string()
    .required("Renter your Password!")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  Gender: Yup.string().required("grnder is required"),
});

const savedData = {
  name: "Rasool",
  email: "rasoolkarami2304@gmail.com",
  password: "Rasool@2304",
  phoneNumber: "09189975964",
  passwordConfirmation: "Rasool@2304",
  Gender: "0",
};

const SignUpForm = () => {
  const [formData, setFormData] = useState(null);

  const formik = useFormik({
    initialValues: formData || initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

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
            type="email"
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
          <label>Phone Number</label>
          <input
            type="phoneNumber"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            onBlur={formik.handleBlur}
            name="phoneNumber"
          ></input>
          {formik.errors.phoneNumber && formik.touched.phoneNumber && (
            <p className="error">{formik.errors.phoneNumber}</p>
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
        <div className="form-control">
          <label>Password confirmation</label>
          <input
            type="text"
            onChange={formik.handleChange}
            value={formik.values.passwordConfirmation}
            onBlur={formik.handleBlur}
            name="passwordConfirmation"
          ></input>
          {formik.errors.passwordConfirmation &&
            formik.touched.passwordConfirmation && (
              <p className="error">{formik.errors.passwordConfirmation}</p>
            )}
        </div>
        <div className="form-container">
          <input
            type="radio"
            id="0"
            name="Gender"
            value="0"
            onChange={formik.handleChange}
            checked={formik.values.Gender === "0"}
          ></input>
          <label htmlFor="0">Male</label>

          <input
            type="radio"
            id="1"
            name="Gender"
            value="1"
            onChange={formik.handleChange}
            checked={formik.values.Gender === "1"}
          ></input>
          <label htmlFor="1">Female</label>
        </div>

        <button
          type="submit"
          disabled={!formik.isValid}
          className={!formik.isValid ? "disabeled-btn" : ""}
        >
          Submit
        </button>
        <button
          title="It is a exercise for loading user data when he enter it before!"
          onClick={() => setFormData(savedData)}
        >
          load saved data
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
