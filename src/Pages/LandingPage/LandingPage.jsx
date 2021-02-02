import React, { useState, useContext } from "react"
import { AppContext } from "../../Context/GlobalContext"
import { Button, Modal, Alert } from "react-bootstrap"
import { useHistory } from "react-router-dom"

function LandingPage() {
  const history = useHistory();
  const [state, dispatch] = useContext(AppContext);

  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [FormData, setForm] = useState({
    email: "",
    password: "",
    fullname: "",
  });
  const [FormLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const Register = (e) => {
    e.preventDefault();
    setShowRegister((
      <Alert variant="success" onClose={() => setShowRegister(false)} dismissible>
        <p>Your registration is successful</p>
      </Alert>
    ))
  };
  const Login = (e) => {
    e.preventDefault();
    if (FormLogin.email === FormData.email && FormLogin.password === FormData.password){
      dispatch({
        type: "LOGIN_SUCCESS",
          email: FormData.email,
          fullname: FormData.fullname,
        
      });
      history.push("/Home");
    } else {
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
  const onChangeLogin = (e) => {
    setFormLogin({ ...FormLogin, [e.target.name]: e.target.value });
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
                <input type="email" className="form-control form-grey" name="email" onChange={(e) => onChangeLogin(e)} placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control form-grey" name="password" onChange={(e) => onChangeLogin(e)} placeholder="Password" />
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
                <input type="email"  className="form-control form-grey" name="email"  onChange={(e) => onChange(e)} placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control  form-grey" name="password" onChange={(e) => onChange(e)} placeholder="Password" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control  form-grey" name="fullname" onChange={(e) => onChange(e)}placeholder="Full Name" />
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


