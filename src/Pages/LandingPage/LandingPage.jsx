import React from "react"
import { Button } from "react-bootstrap"

function LandingPage() {

  return (
    <div className="wrapper mt-4">
      <img className="lp-rakbuku" src="Img/Content/lp-RakBuku.png" alt="" />
      <img className="lp-wow" src="Img/Content/wow.png" alt="" />
      <div className="lp-box">
        <div className="lp-text">
          Sign-up now and subscribe to enjoy all the cool and latest books - The
          best book rental service provider in Indonesia
        </div>
        <div className="lp-button-group">
          <Button variant="danger" className="lp-sign bg-red">
            Sign Up
          </Button>
          <Button variant="secondary" className="lp-sign c-black bg-grey">
            Sign In
          </Button>
        </div>
      </div>
     
    </div>
  );
}
export default LandingPage;


