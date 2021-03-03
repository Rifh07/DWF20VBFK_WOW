import React, { useState, useContext, useEffect } from "react";
import { API, setAuthToken } from "../../Config/Api";
import { AppContext } from "../../Context/GlobalContext";
import { Button, Modal, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function LandingPage() {
  const history = useHistory();
  const [state, dispatch] = useContext(AppContext);

  useEffect(() => {
    if (!state.loading && state.isLogin) history.push("/Home");
  }, []);

  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [FormData, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    gender: "",
    subscribe: "",
  });

  const { fullName, email, password, phone, address, gender } = FormData;

  const Register = async (e) => {
    e.preventDefault();
    try {
      const body = JSON.stringify({
        fullName, email, password, phone, address, gender
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const user = await API.post("/register", body, config);
      await dispatch({
        type: "LOGIN_SUCCESS",
        payload: user.data.data.user,
        payloadToken: user.data.data.token,
      });

      setAuthToken(user.data.data.token);

      history.push("/Home");
    } catch (error) {
      setShowRegister((
        <Alert variant="danger" onClose={() => setShowRegister(false)} dismissible>
          <p>Email already exists</p>
        </Alert>
      ))
    }
  };

  const Login = async (e) => {
    e.preventDefault();
    try {
      const body = JSON.stringify({
        email,
        password
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const user = await API.post("/login", body, config);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: user.data.data.user,
        payloadToken: user.data.data.token,
      });

      setAuthToken(user.data.data.token);

      history.push("/Home");
    } catch (error) {
      setShowLogin((
        <Alert variant="danger" onClose={() => setShowLogin(false)} dismissible>
          <p>Username or password incorrect</p>
        </Alert>
      ))
    }
  };
  const onChange = (e) => {
    setForm({ ...FormData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setSignIn(false)
    setSignUp(false)
  }
  const handleSignIn = () => {
    setSignUp(false)
    setSignIn(true)
  }
  const handleSignUp = () => {
    setSignIn(false)
    setSignUp(true)
  }
  

  return (
    <div className="wrapper mt-4">
      { state.isLogin? history.push("/Home") : "" }
      <img className="lp-rakbuku" src="Img/Content/lp-RakBuku.png" alt="" />
      <img className="lp-wow" src="Img/Content/wow.png" alt="" />
      <div className="lp-box">
        <div className="lp-text">
          Sign-up now and subscribe to enjoy all the cool and latest books - The
          best book rental service provider in Indonesia
        </div>
        <div className="lp-button-group">
          <Button variant="danger" className="lp-sign bg-red" onClick={handleSignUp}>
            Sign Up
          </Button>
          <Button variant="secondary" className="lp-sign c-black bg-grey" onClick={handleSignIn} >
            Sign In
          </Button>
        </div>
      </div>
      {/* Modal Sign In */}
      <Modal aria-labelledby="contained-modal-title-vcenter" centered dialogClassName="modal-sign" show={signIn} onHide={handleClose}>
        <Modal.Body id="contained-modal-title-vcenter">
          <div className="mt-4">
            <h2 className="mb-4"> Sign In</h2>
            <form onSubmit={(e) => Login(e)} >
              <div className="form-group">
                {showLogin}
              </div>
              <div className="form-group">
                <input type="email" className="form-control form-grey" name="email" onChange={(e) => onChange(e)} placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control form-grey" name="password" onChange={(e) => onChange(e)} placeholder="Password" />
              </div>
              <div className="form-group">
                <Button variant="danger" className="form-control bg-red" type="submit"> Sign In </Button>
              </div>
              <div className="form-group">
                <h6>Don't have an account? Klik <b className="cursor inline font-wg" onClick={handleSignUp}>Here</b></h6>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      {/* Modal Sign Up */}
      <Modal aria-labelledby="contained-modal-title-vcenter" centered dialogClassName="modal-sign" show={signUp} onHide={handleClose}>
        <Modal.Body className="width-80" id="contained-modal-title-vcenter">
          <div className="mt-4">

            <h2 className="mb-4"> Sign Up</h2>
            <form onSubmit={(e) => Register(e)} >
              <div className="form-group">
                {showRegister}
              </div>
              <div className="form-group">
                <input type="text"  className="form-control form-grey" name="fullName"  onChange={(e) => onChange(e)} placeholder="Full Name" />
              </div>
              <div className="form-group">
                <input type="email"  className="form-control form-grey" name="email"  onChange={(e) => onChange(e)} placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control  form-grey" name="password" onChange={(e) => onChange(e)} placeholder="Password" />
              </div>
              <div className="form-group">
                <select name="gender" className="form-control  form-grey" onChange={(e) => onChange(e)} >
                  <option disabled selected>== Gender ==</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="form-group">
                <input type="number" className="form-control  form-grey" name="phone" onChange={(e) => onChange(e)} placeholder="Phone Number" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control  form-grey" name="address" onChange={(e) => onChange(e)} placeholder="Address" />
              </div>
              <div className="form-group">
                <Button variant="danger" className="form-control bg-red" type="submit"> Sign Up </Button>
              </div>
              <div className="form-group">
                <h6>Already have an account? Klik <b className="cursor inline font-wg" onClick={handleSignIn}>Here</b></h6>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default LandingPage;


