import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const NavLinkStyles = ({ isActive }) => {
    return {
      fontweight: isActive ? "bolder" : "normal",
      color: isActive ? "#CAC03D" : "#F6F4F8",
      textDecoration: isActive ? "underline" : "none",
    };
  };
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg fixed-top">
          <Link className="navbar-brand" href="#">
            <img src="./Image/main.png" alt="logo" className="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink
                  className="nav-link text-uppercase"
                  style={NavLinkStyles}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-uppercase"
                  style={NavLinkStyles}
                  to="/product"
                >
                  Product
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <NavLink to="/cart" style={NavLinkStyles}>
              <i class="bi bi-cart my-2 my-sm-0 mx-3"></i>
              <h5>Cart</h5>
            </NavLink>
          </div>
          <form className="form-inline my-2 my-lg-0">
            <button
              className="btn btn-outline-primary btn-light my-2 my-sm-0 mx-3"
              type="submit"
            >
              <NavLink className="nav-link text-uppercase" to="/login">
                Login
              </NavLink>
            </button>
          </form>
        </nav>
      </header>
    </>
  );
};
