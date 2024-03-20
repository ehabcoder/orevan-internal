import React, { useEffect } from "react";
import logo from "../../images/logoicon.png";
import { Link, useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-black ">
        <div className="container-fluid navbarContainer">
          <Link className="navbar-brand" to="">
            <img src={logo} alt="" />
          </Link>
          {/* ##################### Please enhance the UI for the logout button ################### */}
          <button onClick={logoutHandler} className="btn btn-danger">
            Logout
          </button>
          {/* ##################### Please enhance the UI for the logout button ################### */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link " to="">
                  Orevan Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
