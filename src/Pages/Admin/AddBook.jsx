import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavDropdown, Dropdown, Button, Modal } from "react-bootstrap";
import { faBook, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { API } from "../../Config/Api";
import { AppContext } from "../../Context/GlobalContext";

function AddBook() {
  const history = useHistory();
  const [state, dispatch] = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);
  const [color, setColor] = useState(null);
  const [alert, setAlert] = useState(false);
  const handleAlert = () => {
      setAlert(true)
  }
  const handleAlertc = () => {
      setAlert(false)
  }
  const [form, setForm] = useState({
    title : "",
    publicationDate : "",
    pages : null,
    author : "",
    isbn : null,
    about : "",
  }); 
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const [formCover, setFormCover] = useState({
    coverName : "",
    coverFile : null,
  });

  const coverHandler = (e) => {
    setFormCover({
      coverFile : e.target.files[0],
      coverName : e.target.files[0].name
    })
  };
  const [formBook, setFormBook] = useState({
    bookName : "",
    bookFile : null,
  });

  const bookHandler = (e) => {
    setFormBook({
      bookFile : e.target.files[0],
      bookName : e.target.files[0].name
    })
  };
  
  useEffect(() => {
    if (state.user.role !== "Admin") {
      history.push("/");
    }
  }, []);

  const { title, publicationDate, pages, author, isbn, about } = form;
  const { coverFile } = formCover;
  const { bookFile } = formBook;

  const addBook = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const body = new FormData();
      body.append("title", title);
      body.append("publicationDate", publicationDate);
      body.append("pages", pages);
      body.append("author", author);
      body.append("isbn", isbn);
      body.append("about", about);
      body.append("coverFile", coverFile);
      body.append("bookFile", bookFile);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      await API.post('/books', body, config);
      setLoading(false)
      setColor("text-center c-green");
      setMsg("Add book is success");
      handleAlert();
    } catch (error) {
      setLoading(false)
      setColor("text-center c-red");
      setMsg("Add book is failed");
      handleAlert();
    }
  }

  function logout() {
    dispatch({
      type: "LOGOUT",
    });
    history.push("/");
  }
  return (
    <div className="mt-5 ml-5 pl-5 pr-5 mr-5 pr-5">
      <Link to="/Transaction" as={Link} className="none-decoration inline">
        <img className="mb-5" src="/Img/Content/wow-mini.png" alt="" />
      </Link>

      <NavDropdown
        className="float-right inline admin-profile"
        title={<img src="/Img/Profile/AdminProfile.png" alt="" />}
      >
        <Dropdown.Item to="/AddBook" as={Link}>
          <FontAwesomeIcon icon={faBook} className="mr-4 c-grey" />
          Add Book
        </Dropdown.Item>
        <Dropdown.Item onClick={() => logout()}>
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-4 c-red" />
          Logout
        </Dropdown.Item>
      </NavDropdown>

      <div className="row mb-5">
        <div className="col-md-7">
          <div className="mt-1 mb-5">
            <h3 className="name-home">Add Book</h3>
          </div>
          <form onSubmit={(e) => addBook(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-grey" onChange={(e) => onChange(e)}
                name="title"
                placeholder="Title"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-grey" onChange={(e) => onChange(e)}
                name="publicationDate"
                placeholder="Publication Date"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control form-grey" onChange={(e) => onChange(e)}
                name="pages"
                placeholder="Pages"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-grey" onChange={(e) => onChange(e)}
                name="author"
                placeholder="Author"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-grey" onChange={(e) => onChange(e)}
                name="isbn"
                placeholder="ISBN"
              />
            </div>
            <div className="form-group">
              <textarea
                type="text"
                className="form-control form-grey" onChange={(e) => onChange(e)}
                name="about"
                placeholder="About This Book"
              ></textarea>
            </div>
            <div className="form-group">
              <input
                type="file"
                className="form-grey" onChange={(e) => coverHandler(e)}
                name="coverFile"
                id="actual-btn"
                hidden
              />
              <label for="actual-btn" className="form-grey">
                <div className="row">
                  <div className="col-md-12">
                    <p className="text-left inline c-grey pl-2 pr-2">
                      Attache Cover File
                    </p>
                    <img
                      className="inline"
                      style={{
                        width: "7%",
                        marginTop: "-3px",
                      }}
                      src="/Img/Content/Attach.png"
                      alt=""
                    />
                  </div>
                </div>
              </label>
              <p style={{display: "inline"}} className="ml-3">{formCover.coverName ? formCover.coverName : "No file chosen"}</p>
            </div>
            <div className="form-group">
              <input
                type="file"
                className="form-grey" onChange={(e) => bookHandler(e)}
                name="bookFile"
                id="actual-btn2"
                hidden
              />
              <label for="actual-btn2" className="form-grey">
                <div className="row">
                  <div className="col-md-12">
                    <p className="text-left inline c-grey pl-2 pr-2">
                      Attache Book File
                    </p>
                    <img
                      className="inline"
                      style={{
                        width: "7%",
                        marginTop: "-3px",
                      }}
                      src="/Img/Content/Attach.png"
                      alt=""
                    />
                  </div>
                </div>
              </label>
              <p style={{display: "inline"}} className="ml-3">{formBook.bookName ? formBook.bookName : "No file chosen"}</p>
            </div>

            {JSON.stringify(form)}

            <div className="lp-button-group text-right">
            {loading ? (
                <Button variant="danger" className="bg-red" disabled>
                  <div class="spinner-border spinner-border-sm text-light mr-2" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                  Add Book <FontAwesomeIcon icon={faBook} className="ml-2" />
                </Button>
              ) : (
                <Button variant="danger" className="bg-red" type="submit">
                  Add Book <FontAwesomeIcon icon={faBook} className="ml-2" />
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
      <Modal aria-labelledby="contained-modal-title-vcenter" centered show={alert} onHide={handleAlertc}>
          <Modal.Body className="width-100" id="contained-modal-title-vcenter">
              <p className={color}>{msg}</p>
          </Modal.Body>
      </Modal>
    </div>
  );
}

export default AddBook;
