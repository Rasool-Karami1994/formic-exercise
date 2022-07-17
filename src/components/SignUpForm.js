import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Input from "./common/Input";
import RadioButton from "./common/RadioButton";
import CheckBox from "./common/CheckBox";
import SelectComponent from "./common/SelectComponent";
import BooleanCheckBox from "./common/BooleanCheckBox";
import signUpImg from "./signUp.jpg";
//step1
const initialValues = {
  id: 2,
  name: "",
  email: "",
  password: "",
  phoneNumber: "",
  passwordConfirmation: "",
  gender: "",
  country: "",
  intrests: [],
  terms: false,
};

//step3 with yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required").min(3, "name is too short"),
  email: Yup.string()
    .email("Email format is not correct")
    .required("Email is required!"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "min length is 8 char!"),
  phoneNumber: Yup.string()
    .required("Phone Number is required!")
    .matches(/^[0-9]{11}$/, "Invalid phone number"),

  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  gender: Yup.string().required("Gender is required"),
  country: Yup.string().required("choose your counrty!"),
  intrests: Yup.array().min(1).required("choose at least one Intrest!"),
  terms: Yup.boolean()
    .required("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted."),
});

const options = [
  { label: "Select your country", value: "" },
  { label: "Iran", value: "IR" },
  { label: "UK", value: "UK" },
  { label: "USA", value: "USA" },
  { label: "UA", value: "UA" },
];

const checkBoxOptions = [
  { label: "React", value: "React" },
  { label: "Vue", value: "Vue" },
];

const SignUpForm = () => {
  const [formData, setFormData] = useState(null);
  const [isShow, setIsShow] = useState(false);
  //step2
  const onSubmit = (values) => {
    axios
      .post(
        "https://my-json-server.typicode.com/Rasool-Karami1994/form-server-api/users/",
        values
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    setIsShow(true);
  };

  const formik = useFormik({
    initialValues: formData || initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });
  useEffect(() => {
    axios
      .get(
        "https://my-json-server.typicode.com/Rasool-Karami1994/form-server-api/users/"
      )
      .then((res) => setFormData(res.data[0]))
      .catch((err) => console.log(err));
  }, []);
  console.log(formik.isValid);

  return (
    <div>
      {isShow ? (
        <div className="mess-box">Regetered successfully!</div>
      ) : (
        <div className="page-container">
          <form onSubmit={formik.handleSubmit}>
            <h2>Sign Up</h2>
            <Input label="Name" name="name" formik={formik} />
            <Input label="Email" name="email" formik={formik} />
            <Input label="Phone Number" name="phoneNumber" formik={formik} />
            <Input label="Password" name="password" formik={formik} />
            <Input
              label="Password Confirmation"
              name="passwordConfirmation"
              formik={formik}
            />

            <RadioButton formik={formik} name="gender" />
            <SelectComponent formik={formik} name="country" options={options} />
            <CheckBox
              formik={formik}
              name="intrests"
              checkBoxOptions={checkBoxOptions}
            />
            <BooleanCheckBox formik={formik} />
            <button
              type="submit"
              disabled={!formik.isValid}
              className={!formik.isValid ? "disabeled-btn" : ""}
            >
              Create An Account
            </button>
          </form>
          <div className="img-container">
            <img src={signUpImg} alt="sign-up"></img>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpForm;
