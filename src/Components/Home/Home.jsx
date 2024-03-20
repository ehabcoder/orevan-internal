import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { Footer } from "../Footor/Footor";
import homeImage from "../../images/Orevan-portals.png";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  const handleButton = () => {
    // Navigate to a specific route when the button is clicked
    navigate("/Communication");
  };
  return (
    <>
      <Navbar />
      <div className="homeContainer bg-black ">
        <div>
          <img className="w-100" src={homeImage} alt="" />
        </div>

        <div className="container bg-black">
          <div className="row justify-content-center pt-5 pb-5 mb-5">
            <div className="col-md-12">
              <div className="d-flex justify-content-center align-items-center">
                <button
                  onClick={handleButton}
                  className="btn buttonTitle text-white mb-2 w-50 mx-2 py-2"
                  style={{ backgroundColor: "#948af4" }}
                >
                  Communication Tools
                </button>

                <button
                  className="btn buttonTitle text-white mb-2 w-50 py-2"
                  style={{ backgroundColor: "#948af4" }}
                >
                  Orevan Platforms
                </button>
              </div>

              <div className="d-flex justify-content-center align-items-center mb-5">
                <button
                  className="btn buttonTitle text-white mb-2 w-50 mx-2 py-2"
                  style={{ backgroundColor: "#948af4" }}
                >
                  Orientation Material
                </button>
                <button
                  className="btn buttonTitle text-white mb-2 w-50 py-2"
                  style={{ backgroundColor: "#948af4" }}
                >
                  Orevan Assets
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container ">
          <div className="row">
            <div className="col-md-12 ">
              <div className="d-flex justify-content-center align-items-center">
                <div className="homeTitles w-50  my-4 mx-3 ">
                  <Link to="/Communication" target="_blank">
                    <h2>Communication Tools</h2>
                  </Link>
                </div>
                <div className="homeTitles w-50  mb-4">
                  <Link to="">
                    <h2>Orevan Platforms</h2>
                  </Link>
                </div>
              </div>

              <div className="commButton d-flex justify-content-center align-items-center ">
                <div className="homeTitles w-50 mx-3">
                  <Link to="">
                    <h2>Orientation Material</h2>
                  </Link>
                </div>
                <div className="homeTitles w-50 ">
                  <Link to="">
                    <h2>Orevan Assets</h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
