import React from 'react';
import NavbarComponent from './component/Navbar.js'
import JumbotronComponent from './component/Jumbotron.js'
import {
  Row,
  Col
} from 'reactstrap'
import './App.css';
import 'font-awesome/css/font-awesome.min.css';


function App() {
  const img = require('./rcg-logo-v4.png')
  return (
    <div className="App">
      <NavbarComponent />
      <Row className="content">
        <Col md="5">
          <h1 className="content" >Really Cheap Geeks</h1>
          <img src={img} className="App-logo content" alt="logo" />
        </Col>
        <Col md="7">
          <JumbotronComponent />
        </Col>
      </Row>
    </div>
  );
}

export default App;