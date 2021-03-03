import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

import { API } from "../../../Config/Api";
import Card from '../../../Component/Home/Card';

function Home() {
  const [books, setBooks] = useState([]);
  const [alert, setAlert] = useState(false)
    const handleAlert = () => {
        setAlert(true)
      }
      const handleAlertc = () => {
        setAlert(false)
      }

  useEffect(() => {
    book();
  }, []);
  
  const book = async () => {
      try {
        const books = await API.get("/books");
        await setBooks(books.data.data.books);
      } catch (error) {
        console.log(error);
      } 
  }

  return (
    <div className="mb-5">
      <div className="mt-4 shadow">
        <img className="header-home border-radius" src="/Img/Content/HeaderHome2.png" alt="" />
        <img className="pulang-home" src="/Img/BookCover/Pulang.png" alt="" />
      </div>
      <div className="mt-4">
        <h4 className="name-home mb-3">List Book</h4>
      </div>
      <div className="row mt-3 justify-content-left">
        {books.map((book) => (
            <Card
              key={book.id}
              book={book}
              handleAlert={handleAlert}
            />
        ))}
      </div>
      <Modal aria-labelledby="contained-modal-title-vcenter" centered show={alert} onHide={handleAlertc}>
        <Modal.Body className="width-100" id="contained-modal-title-vcenter">
            <p className="text-center c-red"> Please make a payment to read the latest books</p>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Home