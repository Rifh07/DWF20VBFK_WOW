import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom";
import { NavDropdown, Dropdown, Button } from "react-bootstrap";
import { faBook, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AppContext } from "../../Context/GlobalContext"

function AddBook() {
    const history = useHistory();
    const [state, dispatch] = useContext(AppContext);
    function logout() {
          dispatch({
            type: "LOGOUT",
          })
          history.push("/")
      }
  return (
    <div className="mt-5 ml-5 pl-5 pr-5 mr-5 pr-5">
      <Link to="/Transaction" as={Link} className="none-decoration inline">
        <img className="mb-5" src="/Img/Content/wow-mini.png" alt="" />
      </Link>

      <NavDropdown className="float-right inline admin-profile" title={ <img src="/Img/Profile/AdminProfile.png" alt="" /> } >
        <Dropdown.Item to="/AddBook" as={Link}>
          <FontAwesomeIcon icon={faBook} className="mr-4 c-grey" />
          Add Book
        </Dropdown.Item>
        <Dropdown.Item onClick={()=>logout()}>
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-4 c-red" />
          Logout
        </Dropdown.Item>
      </NavDropdown>

      <div className="row mb-5">
        <div className="col-md-7">
          <div className="mt-1 mb-5">
            <h3 className="name-home">Add Book</h3>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-grey"
              name="AccountNumber"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-grey"
              name="AccountNumber"
              placeholder="Publication Date"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-grey"
              name="AccountNumber"
              placeholder="Pages"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-grey"
              name="AccountNumber"
              placeholder="Author"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-grey"
              name="AccountNumber"
              placeholder="ISBN"
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              className="form-control form-grey"
              name="AccountNumber"
              placeholder="About This Book"
            ></textarea>
          </div>
          <input
            type="file"
            className="form-grey"
            name="file"
            id="actual-btn"
            hidden
          />
          <label for="actual-btn" className="form-grey">
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
          <div className="lp-button-group text-right">
            <Button variant="danger" className="bg-red" type="submit">
              Add Book <FontAwesomeIcon icon={faBook} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
