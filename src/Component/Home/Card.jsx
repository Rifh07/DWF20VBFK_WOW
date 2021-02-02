import React, { useContext, useState } from "react"
import { useHistory } from 'react-router-dom'
import { Modal } from "react-bootstrap"

import { AppContext } from "../../Context/GlobalContext"

function Card({book}) {
    const [state] = useContext(AppContext)
    const history = useHistory()
    const { Id, Title, Author, Image } = book
    const [alert, setAlert] = useState(false)
    const handleAlert = () => {
        setAlert(true)
      }
      const handleAlertc = () => {
        setAlert(false)
      }

    const detailBook = () => {
        if (state.subscribe === true){
            history.push(`/Book/${Id}`)
        } else {
            handleAlert()
        }
      }
    return (
        <div className="col-md-12 cursor" onClick={detailBook}>
          <img className="mb-3 home-img-book" src={'/Img/Book/'+Image} alt="" />
          <div className="text-left">
            <div className="home-title-book">
              <h5 className="name-home">{Title}</h5>
            </div>
            <h6 className="penulis-home">{Author}r</h6>
          </div>

          <Modal aria-labelledby="contained-modal-title-vcenter" centered show={alert} onHide={handleAlertc}>
            <Modal.Body className="width-100" id="contained-modal-title-vcenter">
                <p className="text-center c-red"> Please make a payment to read the latest books</p>
            </Modal.Body>
        </Modal>
        </div>
    )
}

export default Card
