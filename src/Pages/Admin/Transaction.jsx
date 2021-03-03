import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavDropdown, Dropdown } from "react-bootstrap";
import { faBook, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { API } from "../../Config/Api";
import { AppContext } from "../../Context/GlobalContext";
import TableTransaction from "../../Component/Transaction/TableTransaction";
import Loading from "../../Component/Loading";

function Transaction() {
  const history = useHistory();
  const [state, dispatch] = useContext(AppContext);
  const [transaction, setTransaction] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (state.user.role !== "Admin") {
      history.push("/");
    }
    getTransaction();
    setLoading(false);
  }, []);

  const getTransaction = async () => {
    try {
      const transaction = await API.get("/transaction");
      await setTransaction(transaction.data.data.transactions);
    } catch (error) {
      
    }
  }

  const action = async (id, userStatus, paymentStatus) => {
    try {
      const remainingActive = 30;
      
      const body = JSON.stringify({
        remainingActive, userStatus, paymentStatus
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      setLoading(true);
      const transaction = await API.patch(`/transaction/${id}`, body, config);
      if (transaction) {
        getTransaction();
      }
      setLoading(false);

    } catch (error) {
      console.log(error);
    }
  }
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
            {loading ? (<Loading />) : transaction.map((transaction, index) =>(
              <TableTransaction key={transaction.id} transaction={transaction} action={action} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transaction;
