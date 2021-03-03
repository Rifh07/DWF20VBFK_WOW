import React, { useState, useContext } from "react";
import { Button, Modal } from "react-bootstrap"

import { AppContext } from "../../../Context/GlobalContext";
import { API } from "../../../Config/Api";
import { Link } from "react-router-dom";


function Subscribe() {
  const [state] = useContext(AppContext)
  const [alert, setAlert] = useState(false)
  const handleAlert = () => {
      setAlert(true)
    }
    const handleAlertc = () => {
      setAlert(false)
    }

    // image Handler
    const [formImage, setFormImage] = useState({
      fileName : "",
      transferProof : null,
    });
    const imageHandler = (e) => {
      setFormImage({
        transferProof : e.target.files[0],
        fileName : e.target.files[0].name
      })
    };

    // form Handler
    const [form, setForm] = useState({
      accountNumber : "",
    });

    const { accountNumber } = form;
    const { transferProof } = formImage;

    const onChange = (e) => {
      setForm({
        accountNumber : e.target.value,
      })
    }

  const Subscribe = async (e) => {
    e.preventDefault();
    try {
      const body = new FormData();
      body.append("userId", state.user.id);
      body.append("accountNumber", accountNumber);
      body.append("transferProof", transferProof);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const transaction = await API.post('/transaction', body, config);
      
      if (transaction) {
        setForm({accountNumber : ""})
        setFormImage({transferProof : "" ,fileName : ""})
        handleAlert()
      }
      
    } catch (error) {
      console.log(error);
    } 
  }

  return (
    <div className="text-center col-subscribe">
      <h4 className="name-home mb-4">Premium</h4>
      <p>
        Pay now and access all the latest books from <img src="/Img/Content/WowKecil.png" alt="" />
      </p>
      <p className="font-wg">
        <img src="/Img/Content/WowKecil.png" alt="" />: 0981312323
      </p>
      <form className="col-md-5" onSubmit={(e) => Subscribe(e)} >
        <div className="form-group">
          {alert}
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control form-grey"
            name="accountNumber"
            onChange={(e) => onChange(e)}
            placeholder="Input your account number"
          />
        </div>
        <div className="form-group">
          <input
            type="file"
            className="form-control form-grey"
            name="transferProof"
            onChange={(e) => imageHandler(e)}
            id="actual-btn"
            hidden
          />
          <label for="actual-btn" className="form-control form-grey">
            <div className="row">
              <div className="col-md-10">
                <p className="c-red font-wg text-left">
                  Attache proof of transfer
                </p>
              </div>
              <div className="col-md-2">
                <img
                  style={{
                    textAlign: "right",
                    width: "50%",
                    marginTop: "-3px",
                  }}
                  src="/Img/Content/Attach.png"
                  alt=""
                />
              </div>
            </div>
          </label>
          <div className="text-left"><span id="file-chosen">
            {formImage.fileName ? formImage.fileName : "No file chosen"}
          </span></div>
        </div>
        <div className="form-group">
          {state.subscribe ? (
          <Button variant="danger" className="form-control bg-red" type="submit" disabled> Send </Button>
          ) : (
          <Button variant="danger" className="form-control bg-red" type="submit"> Send </Button>
          )}
        </div>
      </form>

      <Modal aria-labelledby="contained-modal-title-vcenter" centered show={alert} onHide={handleAlertc}>
        <Modal.Body className="width-100" id="contained-modal-title-vcenter">
            <p className="text-center c-green"> Thank you for subscribing to premium, your premium package will be active after our admin approves your transaction, thank you</p>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Subscribe
