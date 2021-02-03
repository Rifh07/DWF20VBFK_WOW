import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom";
import { NavDropdown, Dropdown } from "react-bootstrap";
import { faBook, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AppContext } from "../../Context/GlobalContext"

function Transaction() {
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

      <div className="mt-1 mb-5">
        <h3 className="name-home">Incoming Transaction</h3>
      </div>
      <div className="table-reponsif">
        <table className="table table-striped mb-5">
          <thead>
            <tr className="c-red">
              <th scope="col">No</th>
              <th scope="col">Users</th>
              <th scope="col">Bukti Transfer</th>
              <th scope="col">Remaining Active</th>
              <th scope="col">Status Users</th>
              <th scope="col">Status Payment</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="align-middle">
              <th scope="row">1</th>
              <td >Radif</td>
              <td>bukti1.jpg</td>
              <td>26/Hari</td>
              <td className="c-green">Active</td>
              <td className="c-green">Approve</td>
              <td>
                <NavDropdown className="inline admin-profile">
                  <Dropdown.Item className="font-dropdown-size c-green">
                    Approved
                  </Dropdown.Item>
                  <Dropdown.Item className="font-dropdown-size c-red">
                    Cancel
                  </Dropdown.Item>
                </NavDropdown>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Haris Rahman</td>
              <td>bukti2.jpg</td>
              <td>26/Hari</td>
              <td className="c-green">Active</td>
              <td className="c-green">Approve</td>
              <td>
                <NavDropdown className="inline admin-profile">
                  <Dropdown.Item className="font-dropdown-size c-green">
                    Approved
                  </Dropdown.Item>
                  <Dropdown.Item className="font-dropdown-size c-red">
                    Cancel
                  </Dropdown.Item>
                </NavDropdown>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Amin Subagio</td>
              <td>bukti3.jpg</td>
              <td>0/Hari</td>
              <td className="c-red">Not Active</td>
              <td className="c-red">Cancel</td>
              <td>
                <NavDropdown className="inline admin-profile">
                  <Dropdown.Item className="font-dropdown-size c-green">
                    Approved
                  </Dropdown.Item>
                  <Dropdown.Item className="font-dropdown-size c-red">
                    Cancel
                  </Dropdown.Item>
                </NavDropdown>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Haris Astina</td>
              <td>bukti4.jpg</td>
              <td>0/Hari</td>
              <td className="c-red">Not Active</td>
              <td className="c-yellow">Pending</td>
              <td>
                <NavDropdown className="inline admin-profile">
                  <Dropdown.Item className="font-dropdown-size c-green">
                    Approved
                  </Dropdown.Item>
                  <Dropdown.Item className="font-dropdown-size c-red">
                    Cancel
                  </Dropdown.Item>
                </NavDropdown>
              </td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Aziz Oni On</td>
              <td>bukti5.jpg</td>
              <td>0/Hari</td>
              <td className="c-red">Not Active</td>
              <td className="c-yellow">Pending</td>
              <td>
                <NavDropdown className="inline admin-profile">
                  <Dropdown.Item className="font-dropdown-size c-green">
                    Approved
                  </Dropdown.Item>
                  <Dropdown.Item className="font-dropdown-size c-red">
                    Cancel
                  </Dropdown.Item>
                </NavDropdown>
              </td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Sugeng No Pants</td>
              <td>bukti6.jpg</td>
              <td>0/Hari</td>
              <td className="c-red">Not Active</td>
              <td className="c-yellow">Pending</td>
              <td>
                <NavDropdown className="inline admin-profile">
                  <Dropdown.Item className="font-dropdown-size c-green">
                    Approved
                  </Dropdown.Item>
                  <Dropdown.Item className="font-dropdown-size c-red">
                    Cancel
                  </Dropdown.Item>
                </NavDropdown>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transaction;
