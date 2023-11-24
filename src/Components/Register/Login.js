import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

const navigate =useNavigate();

  const handelChange = (e) => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const click = (e) => {
    e.preventDefault();

    const user = localStorage.getItem("user");
    console.log(user);

    const { email, password } = values;
    if (email === "") {
      alert("Email is required");
    } else if (!email.includes("@")) {
      alert("Please enter a valid email");
    } else if (password === "") {
      alert("Password is requirerd");
    } else if (password.length < 6) {
      alert("password should be greater than 6 char");
    } else {
      if (user && user.length) {
        const userdata = JSON.parse(user);
        const login = userdata.filter((logel, el) => {
          return logel.email === email && logel.password === password;
        });

        if (login.length === 0) {
          alert("Invalid details");
        } else {
          alert("user login successfully");
          navigate('/product');
          localStorage.setItem("user_login", JSON.stringify(userdata));
        }
      }
    }
  };
  return (
    <>
      <div className="login template d-flex justify-content-center align-items-center bg-img">
        <div className="form-container rounded border border-dark bg-transparent p-4">
          <form>
            <h2 className="text-white text-center mb-3">Login</h2>

            <div className="mb-2 text-white">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type="email"
                placeholder=" ENTER YOUR EMAIL"
                className="form-control"
                name="email"
                onChange={handelChange}
                required
              />
            </div>

            <div className="mb-2 text-white">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                placeholder=" ENTER YOUR PASSWORD"
                className="form-control"
                name="password"
                onChange={handelChange}
                required
              />
            </div>

            <div className="mb-2 text-white ml-4">
              <input type="checkbox" className="form-check-input" id="Check" />
              <label className="custom-input-lable ms-2" htmlFor="Check">
                Remember Me
              </label>
            </div>

            <div className="d-grid">
              <button className="btn btn-primary" type="submit" onClick={click}>
                Login
              </button>
            </div>

            <p className="text-end mt-2 text-white">
              Forgot <Link to="/password">Password?</Link>
              <span className="mt-2 m-2">Don't have an account</span>
              <Link to="/signup" className="ms-2">
                Signup
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
