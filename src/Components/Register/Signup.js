import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      });

      const [data , setData] = useState([]);

      const handelChange = (e) => {
        const { value, name } = e.target;
        setValues({
          ...values,
          [name]: value
        });
      };

      const click = (e) => {
        e.preventDefault();
        
        const {firstname, lastname, email, password} = values;
        if(firstname === ""){
          alert("Firstname is required")
        }
        else if(lastname === ""){
          alert("Lastname i required")
        }
        else if(email === ""){
          alert("Email is required")
        }
        else if(!email.includes("@")){
          alert("Please enter a valid email")
        }
        else if(password === ""){
          alert("Password is requirerd")
        }
        else if(password.length < 6){
          alert("password should be greater than 6 char")
        }
        else{
           alert("form submitted successfully");
    
           localStorage.setItem("user", JSON.stringify([...data, values]));
        } 
      }
  return (
    <>
      <div className="signup template d-flex justify-content-center align-items-center bg-img">
        <div className="form-container rounded bg-white border border-dark bg-transparent p-4" style={{marginTop:'5rem'}}>
          <form>
            <h2 className="text-white text-center mb-3">Sign up</h2>

            <div className="mb-2 text-white">
              <label htmlFor="fname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                placeholder=" ENTER YOUR FIRST NAME"
                className="form-control"
                name="firstname"
                onChange={handelChange}
                required
              />
            </div>
            <div className="mb-2 text-white">
              <label htmlFor="Lname" className="form-label">
                Lirst Name
              </label>
              <input
                type="text"
                placeholder=" ENTER YOUR LAST NAME"
                className="form-control"
                name="lastname"
                onChange={handelChange}
                required
              />
            </div>
            <div className="mb-2 text-white">
              <label htmlFor="Email1" className="form-label">
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

            <div className="d-grid mt-2">
              <button className="btn btn-primary" type="submit" onClick={click}>
                Sign Up
              </button>
            </div>

            <p className="text-end mt-2 text-white">
              Already have an account
              <Link to="/login" className="m-2">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
