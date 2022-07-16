import React from "react";

const RadioButton = ({ formik, name }) => {
  const options = [
    { label: "male", value: "0" },
    { label: "female", value: "1" },
  ];

  return (
    <div className="form-control">
      {options.map((option) => (
        <React.Fragment key={option.value}>
          <input
            type="radio"
            id={option.value}
            name={name}
            value={option.value}
            onChange={formik.handleChange}
            checked={formik.values[name] === option.value}
          ></input>
          <label htmlFor={option.value}>{option.label}</label>
        </React.Fragment>
      ))}

      {formik.errors[name] && formik.touched[name] && (
        <p className="error">{formik.errors[name]}</p>
      )}
    </div>
  );
};

export default RadioButton;
