import React from "react";
import { Navbar } from "../Navbar/Navbar";
// import internal from "../../images/internal.png";
// import central from "../../images/CRM.png";
// import payment from "../../images/payment.png";
// import orientation from "../../images/orientation.png";
// import website from "../../images/orevanWebsite.png";
// import drive from "../../images/drive.png";
// import people from "../../images/PTSystem.png";
// import system from "../../images/OtSystem.png";
import Internal from "../../images/CommunicationIcons/Internal.svg";
import CRM from "../../images/CommunicationIcons/Crm.svg";
import Payment from "../../images/CommunicationIcons/Payment.svg";
import Orientation from "../../images/CommunicationIcons/Orientation.svg";
import Web from "../../images/CommunicationIcons/Web.svg";
import Drive from "../../images/CommunicationIcons/Drive.svg";
import PT from "../../images/CommunicationIcons/PT.svg";
import Org from "../../images/CommunicationIcons/Org.svg";
import { Container, Row, Col } from "react-bootstrap";
import { Footer } from "../Footor/Footor";
import { Link, useNavigate } from "react-router-dom";

export function Communication() {
  const navigate = useNavigate();
  const handleButton = () => {
    // Navigate to a specific route when the button is clicked
    navigate("/Communication");
  };
  return (
    <>
      <Navbar />
      <div className="communicationContainer">
        <div className="py-1 pt-2">
          <Container>
            <Row>
              <Col>
                <h2 className="text-center titleCommunication ">
                  Communication Tools
                </h2>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="container d-flex   justify-content-center Btn-padding pt-2">
          <div className="row d-flex ">
            <div className="col-md-12 text-center ">
              <div className="img-grid ">
                <Link to="/">
                  <button
                    className="btn buttonTitle text-white mb-2  mx-2 py-2"
                    style={{ backgroundColor: "#948af4" }}
                  >
                    <img src={Internal} alt="Internal" className="px-2" />
                    Internal System
                  </button>
                </Link>
                <Link to="/">
                  <button
                    className="btn buttonTitle text-white mb-2  mx-2 py-2"
                    style={{ backgroundColor: "#948af4" }}
                  >
                    <img src={CRM} alt="Internal" className="px-2" />
                    CRM System
                  </button>
                </Link>
                <Link to="/">
                  <button
                    className="btn buttonTitle text-white mb-2  mx-2 py-2"
                    style={{ backgroundColor: "#948af4" }}
                  >
                    <img src={Payment} alt="Internal" className="px-2" />
                    Payment Request
                  </button>
                </Link>
                <Link to="/">
                  <button
                    className="btn buttonTitle text-white mb-2  mx-2 py-2"
                    style={{ backgroundColor: "#948af4" }}
                  >
                    <img src={Orientation} alt="Internal" className="px-2" />
                    Orientation
                  </button>
                </Link>
              </div>
              <div className="img-grid ">
                <Link to="/">
                  <button
                    className="btn buttonTitle text-white mb-2  mx-2 py-2"
                    style={{ backgroundColor: "#948af4" }}
                  >
                    <img src={Web} alt="Internal" className="px-2" />
                    Orevan Website
                  </button>
                </Link>
                <Link to="/">
                  <button
                    className="btn buttonTitle text-white mb-2  mx-2 py-2"
                    style={{ backgroundColor: "#948af4" }}
                  >
                    <img src={Drive} alt="Internal" className="px-2" />
                    Drive Workspace
                  </button>
                </Link>
                <Link to="/">
                  <button
                    className="btn buttonTitle text-white mb-2  mx-2 py-2"
                    style={{ backgroundColor: "#948af4" }}
                  >
                    <img src={PT} alt="Internal" className="px-2" />
                    PT System
                  </button>
                </Link>
                <Link to="/">
                  <button
                    className="btn buttonTitle text-white mb-2  mx-2 py-2"
                    style={{ backgroundColor: "#948af4" }}
                  >
                    <img src={Org} alt="Internal" className="px-2" />
                    OT System
                  </button>
                </Link>
              </div>
            </div>{" "}
          </div>
        </div>

        {/* <div className="container ContentWrap ">
          <div className="row justify-content-center pt-5 pb-5 mb-5">
            <div className="col-md-12 IconsWrap">
              <div className="d-flex justify-content-center align-items-center">
                <button
                  onClick={handleButton}
                  className="btn buttonTitle text-white mb-2  mx-2 py-2"
                  style={{ backgroundColor: "#948af4" }}
                >
                  <img src={Internal} alt="Internal" className="px-2" />
                  Internal System
                </button>

                <button
                  className="btn buttonTitle text-white mb-2  py-2"
                  style={{ backgroundColor: "#948af4" }}
                >
                  <img src={CRM} alt="Internal" className="px-2" />
                  CRM System
                </button>

                <button
                  className="btn buttonTitle text-white mb-2 mx-2 py-2"
                  style={{ backgroundColor: "#948af4" }}
                >
                  <img src={Payment} alt="Internal" className="px-2" />
                  Payment Request
                </button>
                <button
                  className="btn buttonTitle text-white mb-2     py-2"
                  style={{ backgroundColor: "#948af4" }}
                >
                  <img src={Orientation} alt="Internal" className="px-2" />
                  Orientation
                </button>
              </div>
              <div className="d-flex justify-content-center align-items-center ">
                <button
                  className="btn buttonTitle text-white mb-2 mx-2 py-2"
                  style={{ backgroundColor: "#948af4" }}
                >
                  <img src={Web} alt="Internal" className="px-2" />
                  Orevan Website
                </button>
                <button
                  className="btn buttonTitle text-white mb-2     py-2"
                  style={{ backgroundColor: "#948af4" }}
                >
                  <img src={Drive} alt="Internal" className="px-2" />
                  Drive Workspace
                </button>

                <button
                  className="btn buttonTitle text-white mb-2 mx-2 py-2"
                  style={{ backgroundColor: "#948af4" }}
                >
                  <img src={PT} alt="Internal" className="px-2" />
                  PT System
                </button>
                <button
                  className="btn buttonTitle text-white mb-2     py-2"
                  style={{ backgroundColor: "#948af4" }}
                >
                  <img src={Org} alt="Internal" className="px-2" />
                  OT System
                </button>
              </div>
            </div>
          </div>
        </div> */}
        <Footer />
      </div>

      {/* <div className="communicationContainer">
        <Navbar />;
        <div className="row">
          <div className="col-md-12">
            <h1 className="titleCommunication">Communication Tools</h1>
          </div>

          <div className="centered-container bg-white">
            <div className="iconContainer container  ">
              <div className="row ">
                <div className=" col-md-3  ">
                  <div className="iconImage">
                    <a href="" target="_blank">
                      <img src={internal} alt="" />
                    </a>
                  </div>
                </div>
                <div className=" col-md-3 ">
                  <div className="iconImage">
                    <a href="" target="_blank">
                      <img src={central} alt="" />
                    </a>
                  </div>
                </div>
                <div className=" col-md-3">
                  <div className="iconImage">
                    <a href="" target="_blank">
                      <img src={payment} alt="" />
                    </a>
                  </div>
                </div>
                <div className=" col-md-3">
                  <div className="iconImage">
                    <a href="" target="_blank">
                      <img src={orientation} alt="" />
                    </a>
                  </div>
                </div>
                <div className=" col-md-3">
                  <div className="iconImage">
                    <a href="" target="_blank">
                      <img src={website} alt="" />
                    </a>
                  </div>
                </div>
                <div className=" col-md-3">
                  <div className="iconImage">
                    <a href="" target="_blank">
                      <img src={drive} alt="" />
                    </a>
                  </div>
                </div>
                <div className=" col-md-3">
                  <div className="iconImage">
                    <a href="" target="_blank">
                      <img src={people} alt="" />
                    </a>
                  </div>
                </div>
                <div className=" col-md-3">
                  <div className="iconImage">
                    <a href="" target="_blank">
                      <img src={system} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
