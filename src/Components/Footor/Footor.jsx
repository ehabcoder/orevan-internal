import React from "react";
import footerImage from "../../images/logo_white.png";
export function Footer() {
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-12">
            <div className="footImage d-flex justify-content-between align-items-center">
              <img src={footerImage} alt="" />
              <h6 className="footerTitle pt-1">
                Copyright © 2024 Orevan. All Rights Reserved.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
