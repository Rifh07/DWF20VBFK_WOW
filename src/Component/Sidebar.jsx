import React, { useContext, useEffect } from "react"
import { API } from "../Config/Api"
import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { faUser, faFileInvoiceDollar, faSignOutAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { AppContext } from "../Context/GlobalContext"

function Sidebar() {
    const history = useHistory();
    const [state, dispatch] = useContext(AppContext);

    useEffect(() => {
      if (state.user.role == "Admin") {
        history.push("/transaction");
      }
      Subscribe();
    }, []);

    const Subscribe = async (e) => {

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const transaction = await API.get(`/transaction/user/${state.user.id}`, config);

      if (transaction.data.status === "Success") {
        const subscribes = transaction.data.data.transaction.userStatus;
        if (subscribes ===  "Active") {
          dispatch({
            type: "SUBSCRIBE",
          });
        }
      }
    }

    function logout() {
          dispatch({
            type: "LOGOUT",
          })
          history.push("/")
      }
  return (
    <Nav className="col-md-10 d-md-block sidebar shadow-none margin-left ">
      <Nav.Item className="text-center">
        <Nav.Link to="/Home" as={Link}>
          <img className="wow-mini mb-3" src="/Img/Content/wow-mini.png" alt="" />
        </Nav.Link>
        <img className="profile-home mb-4" src="/Img/Profile/FotoProfile.png" alt="" />
        <h6 className="mb-3 font-wg">{state.user.fullName ? state.user.fullName : "Error"}</h6>
        <h6 className={state.subscribe ? "c-green font-wg" : "c-red font-wg"}>{state.subscribe ? "Subscribed" : "Not Subscribed Yet"}</h6>
        <div className="line-home mt-4" />
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/Profile" as={Link} className="c-grey onclick mt-4">
            <FontAwesomeIcon icon={faUser} className="mr-4" />Profile
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/Subscribe" as={Link} className="c-grey onclick mt-5">
          <FontAwesomeIcon icon={faFileInvoiceDollar} className="mr-4" />Subscribe
        </Nav.Link>
        <div className="line-home mt-4" />
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>logout()} className="c-grey onclick mt-4">
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-4" />Logout
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Sidebar
