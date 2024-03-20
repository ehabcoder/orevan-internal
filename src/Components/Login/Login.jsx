import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Diamond from "../../images/googleIcon.svg";
import Template from "../../images/Orevan-Header.gif";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Footor/Footor";
import { SignUpButton } from "../signUpButton/SignUpButton";
import axios from "axios";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/Home");
    }
  }, [token]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter a valid Email!");
      return;
    } else if (!password) {
      setError("Please enter a valid Password!");
      return;
    } else {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const { data } = await axios.post(
          `http://localhost:5000/api/users/login`,
          {
            email,
            password,
          },
          config
        );
        if (data.token) {
          setToken(data.token);
        }
        localStorage.setItem("token", data.token);
      } catch (error) {
        if (error.response.status == 401) {
          setError(
            `Invalid Email or Password! \n If you think this is wrong please contact the technical team on ehab.reda@orevan.org`
          );
        } else if (error.response.status == 500) {
          setError(
            "Bad Connection! Please check your Internet connection and trye again."
          );
        }
      }
    }
  };
  return (
    <>
      <div className="hamda ">
        <div className="app bg-white w-75 ">
          <div className="left  w-100">
            <img className="w-100" src={Template} alt="" />
          </div>
          <div className="right pt-3 w-100">
            <div className="w-75">
              <h1 className="text-center">Orevan Platforms</h1>
              <h5 className="text-center">Are you part of Orevan's family?</h5>
              {/* Please enhance the error message here */}
              {error && (
                <div className="alert alert-danger mt-3">
                  <strong>{error}</strong>
                </div>
              )}
              <form className="w-100" onSubmit={submitHandler}>
                <div>
                  <label htmlFor="name">Email</label>
                  <input
                    className="form-control bg-light my-3"
                    type="email"
                    id="email"
                    value={email}
                    // placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    className="form-control bg-light my-3 "
                    type="password"
                    id="password"
                    value={password}
                    // placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="my-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                      checked
                    />
                    <label
                      className="form-check-label "
                      htmlFor="exampleCheck1"
                    >
                      Remember me
                    </label>
                  </div>
                  <div>
                    <Link to="/forgetPassword">Forgot password?</Link>
                  </div>
                </div>

                <button className="btn btn-primary mb-3 w-100" type="submit">
                  Sign in
                </button>
              </form>
              <SignUpButton />
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
      {/* <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="loginPage ">
              <img className="w-100 " src={Template} alt="" />
            </div>
            <div className="col md-4 d-flex align-items-center justify-content-center formContainer">
              <div className="w-75 ">
                <h1 className="title text-center">Orevan Platforms</h1>
                <h5 className="text-center">
                  Are you part of Orevan's family?
                </h5>
                <form className=" ">
                  <div>
                    <label className="labels" htmlFor="name">
                      Email:
                    </label>
                    <input
                      className="form-control bg-light my-3"
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="labels" htmlFor="password">
                      Password:
                    </label>
                    <input
                      className="form-control bg-light my-3"
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="my-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label className="form-check-label " for="exampleCheck1">
                        Remember me
                      </label>
                    </div>
                    <div>
                      <a className="forgotButton" href="">
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleClick}
                    className="btn btn-primary mb-3 w-100"
                    type="submit"
                  >
                    Sign in
                  </button>
                </form>

                <button className="googleButton btn btn-dark text-white  w-100  ">
                  <img className="px-1 mb-1" src={Diamond} alt="" /> or sign in
                  with Google
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div> */}

      {/* <div className="row loginContainer  justify-content-center align-items-center pt-5 mt-5">
        <div className="col-md-8 ">
          <div className="loginPage ">
            <img className="w-100  " src={Template} alt="" />
          </div>
        </div>
        <div className="col md-4 d-flex align-items-center justify-content-center formContainer">
          <div className="w-75 ">
            <h1 className="title text-center">Orevan Platforms</h1>
            <h5 className="text-center">Are you part of Orevan's family?</h5>
            <form className=" ">
              <div>
                <label className="labels" htmlFor="name">
                  Email:
                </label>
                <input
                  className="form-control bg-light my-3"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="labels" htmlFor="password">
                  Password:
                </label>
                <input
                  className="form-control bg-light my-3"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="my-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label " for="exampleCheck1">
                    Remember me
                  </label>
                </div>
                <div>
                  <a className="forgotButton" href="">
                    Forgot password?
                  </a>
                </div>
              </div>

              <button
                onClick={handleClick}
                className="btn btn-primary mb-3 w-100"
                type="submit"
              >
                Sign in
              </button>
            </form>

            <button className="googleButton btn btn-dark text-white  w-100  ">
              <img className="px-1 mb-1" src={Diamond} alt="" /> or sign in with
              Google
            </button>
          </div>
        </div>
        <Footer />
      </div> */}
    </>
  );
}
