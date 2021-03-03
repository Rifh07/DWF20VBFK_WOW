import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown, Dropdown } from "react-bootstrap";

const TableTransaction = ({transaction, action, index}) => {
//   const index = 0;
  return (
    <tr className="align-middle">
      <td>{index + 1}</td>
      <td>{transaction.users.fullName}</td>
      <td><Link to={"/Img/Transaction/"+transaction.transferProof} target="_blank">View Image</Link></td>
      <td>{transaction.remainingActive}</td>
      {transaction.userStatus === "Active" ? (<td className="c-green">{transaction.userStatus}</td>) : (<td className="c-red">{transaction.userStatus}</td>)}
      {transaction.paymentStatus === "Approve" ? (<td className="c-green">{transaction.paymentStatus}</td>) : 
      transaction.paymentStatus === "Pending" ? (<td className="c-yellow">{transaction.paymentStatus}</td>) :
      (<td className="c-red">{transaction.paymentStatus}</td>)}
      <td>
        <NavDropdown className="inline admin-profile">
          <Dropdown.Item onClick={() => action(transaction.id, "Active", "Approve")} className="font-dropdown-size c-green">
            Approved
          </Dropdown.Item>
          <Dropdown.Item onClick={() => action(transaction.id, "Not Active", "Cancel")} className="font-dropdown-size c-red">
            Cancel
          </Dropdown.Item>
        </NavDropdown>
      </td>
    </tr>
  );
};

export default TableTransaction;
