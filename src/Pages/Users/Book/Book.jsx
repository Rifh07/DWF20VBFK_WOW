import React, { useEffect, useState, useContext } from "react";
import { API } from "../../../Config/Api";
import { AppContext } from "../../../Context/GlobalContext";
import  Loading  from "../../../Component/Loading";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Book() {
  const [books, setBooks] = useState([]);
  const [listBooks, setListBooks] = useState([]);
  const [state] = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState(null);
  const [color, setColor] = useState(null);
  const [alert, setAlert] = useState(false);
  const handleAlert = () => {
      setAlert(true)
  }
  const handleAlertc = () => {
      setAlert(false)
  }

  const { id } = useParams();

  useEffect(() => {
    list();
    book();
    setLoading(false)
  }, []);
  
  const book = async () => {
      try {
        const books = await API.get(`/books/${id}`);
        await setBooks(books.data.data.book);
      } catch (error) {
        console.log(error);
      } 
  }
  const list = async () => {
    try {
      const books = await API.get(`/books/list/${state.user.id}`);
      await setListBooks(books.data.data.books);
    } catch (error) {
      console.log(error);
    } 
  }

  const notList = listBooks.find(books => books.booksId == id)

  const myList = async () => {
    try {
      const usersId = state.user.id;
      const booksId = id;

      const body = JSON.stringify({
        usersId, booksId
      });
      
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const listBook = await API.post("/books/list", body, config);

      if (listBook) {
        const books = await API.get(`/books/list/${state.user.id}`);
        await setListBooks(books.data.data.books);
      }

      setColor("text-center c-green");
      setMsg("Add list book has been successfully");
      handleAlert();
    } catch (error) {
      setColor("text-center c-red");
      setMsg("Add list book has been unsuccessful!");
      handleAlert();
    } 
  }

  return (
    <div className="mt-5 pb-5">
      {loading ? <Loading /> : books ? (
        <>
          <div className="row pt-5 text-left">
            <div className="col-md-4">
              <img className="book width-100" src={'/Img/BookCover/'+books.coverFile} alt="" />
            </div>
            <div className="col-md-7 pl-4">
              <h1 className="name-home mb-1 mt-2">{books.title}</h1>
              <h6 className="c-grey">{books.author}</h6>
              <h6 className="font-wg mt-4 mb-1">Publication date</h6>
              <p className="c-grey text-profile">{books.publicationDate}</p>
              <h6 className="font-wg mt-4 mb-1">Pages</h6>
              <p className="c-grey text-profile">{books.pages}</p>
              <h6 className="font-wg c-red mt-4 mb-1">ISBN</h6>
              <p className="c-grey text-profile">{books.isbn}</p>
            </div>
          </div>
          <div className="mt-5">
            <h4 className="name-home mb-3">About This Book</h4>
            <p className="c-grey mb-5 text-justify">
                {books.about}
            </p>
            <div className="lp-button-group text-right">
              { notList ? (
                <>  </>
              ) : (
               <> 
                <Button variant="danger" className="bg-red" onClick={myList}> 
                    Add My List  <FontAwesomeIcon icon={faBookmark} className="ml-2" />
                </Button>
              </> )}
                <Button variant="secondary" className="ml-3 bg-grey c-black" to={`/Book/${books.id}/Read`} as={Link}> 
                    Read Book {">"}
                </Button>
            </div>
          </div>
        </>
      ) : (
        <h2>Data Tidak Ditemukan</h2>
      )}
      <Modal aria-labelledby="contained-modal-title-vcenter" centered show={alert} onHide={handleAlertc}>
        <Modal.Body className="width-100" id="contained-modal-title-vcenter">
          <p className={color}>{msg}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Book;
