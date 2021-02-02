import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import PrivateRoute from "./Component/PrivateRoute";
import Sidebar from "./Component/Sidebar";
import Home from "./Pages/Users/Home/Home";
import LandingPage from "./Pages/LandingPage/LandingPage";

function App() {
  return (
    <Router>
      <Switch>
        {/* Tanpa Auth */}
        <Route path="/" exact component={LandingPage} />
        {/* Dengan Auth */}
        <Container fluid>
          <Row>
            <Col xs={3} id="sidebar-wrapper">
              <Sidebar />
            </Col>
            <Col xs={8} id="page-content-wrapper">
              <PrivateRoute path="/Home" exact component={Home} />
            </Col>
          </Row>
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
