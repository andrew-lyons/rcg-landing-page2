import React from 'react';
import { ComputerShowcase } from './ComputerShowcase.js'
import {
    Jumbotron,
    Table,
    Row,
    Col,
} from 'reactstrap';

const JumbotronComponent = (props) => {
    return (
        <div>
            <Jumbotron className="smol-jumbotron-margin">
                <Row>
                    <Col md="7">
                        <Table responsive>
                            <tbody>
                                <tr>
                                    <th scope="row">Monday - Friday</th>
                                    <td>9:00AM - 5:00PM</td>
                                </tr>
                                <tr>
                                    <th scope="row">Saturday</th>
                                    <td>12:00PM - 3:00PM</td>
                                </tr>
                                <tr>
                                    <th scope="row">Sunday</th>
                                    <td>Closed</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col md="5">
                    <h2 style={{ color: "#89c43e" }} >Your Local Repair for ALL major devices</h2>
                    </Col>
                    <Col>
                        <ComputerShowcase />
                        <hr className="my-3" />
                        <h3 style={{ color: "#89c43e" }} >Don't see your device listed? Give us a call!</h3>
                    </Col>
                </Row>
                <hr className="my-3" />
                <h1>Free Estimates + Warrantied Repairs!</h1>
                <h3>Call or Text - 304-422-4335</h3>
                <h3>Email - reallycheapgeeks@gmail.com</h3>
                <hr className="my-3" />
            </Jumbotron>
        </div>
    );
};

export default JumbotronComponent;
