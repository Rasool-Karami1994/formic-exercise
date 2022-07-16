import React from "react";

const CheckBox = ({ formik, name, checkBoxOptions }) => {
  return (
    <div className="form-control">
      {checkBoxOptions.map((option) => (
        <React.Fragment key={option.value}>
          <input
            type="checkbox"
            id={option.value}
            name={name}
            value={option.value}
            onChange={formik.handleChange}
            checked={formik.values[name].includes(option.value)}
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

export default CheckBox;
