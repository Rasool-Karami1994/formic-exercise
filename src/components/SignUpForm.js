import React, { useState } from "react";

const SignUpForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = ({ target }) => {
    setUserData({ ...userData, [target.name]: target.value });
  };
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
            onChange={changeHandler}
            value={userData.name}
            name="name"
          ></input>
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            onChange={changeHandler}
            value={userData.email}
            name="email"
          ></input>
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="text"
            onChange={changeHandler}
            value={userData.password}
            name="password"
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
