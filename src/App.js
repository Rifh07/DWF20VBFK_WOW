import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import PrivateRoute from "./Component/PrivateRoute";

import LandingPage from "./Pages/LandingPage/LandingPage";
import Sidebar from "./Component/Sidebar";
import Home from "./Pages/Users/Home/Home";
import Subscribe from "./Pages/Users/Subscribe/Subscribe";
import Profile from "./Pages/Users/Profile/Profile";
import Book from "./Pages/Users/Book/Book";
import Read from "./Pages/Users/Book/Read";
import Transaction from "./Pages/Admin/Transaction";

function App() {
  return (
    <Router>
      <Switch>
        {/* Tanpa Auth */}
        <Route path="/" exact component={LandingPage} />
        {/* Dengan Auth */}
        <PrivateRoute path="/Transaction" exact component={Transaction} />

        <PrivateRoute path="/Book/:id/Read" exact component={Read} />
        <Container fluid className="mb-5">
          <Row>
            <Col xs={3} id="sidebar-wrapper">
              <Sidebar />
            </Col>
            <Col xs={8} id="page-content-wrapper">
              <PrivateRoute path="/Home" exact component={Home} />
              <PrivateRoute path="/Subscribe" exact component={Subscribe} />
              <PrivateRoute path="/Profile" exact component={Profile} />
              <PrivateRoute path="/Book/:id/Detail" exact component={Book} />
            </Col>
          </Row>
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
