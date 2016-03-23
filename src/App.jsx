
import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap';

const Header = () => (
    <header className="text-left container">
        <Row>
            <Col md={10} mdOffset={1}>
	    <h1>Have you tried React?</h1>
	    <p className="lead">React with d3.js was the most fun I've had in years.</p>
            </Col>
	</Row>
    </header>
);

const App = () => (
    <div>
        <div className="bg-white-dark padding-small-top"></div>
        <Header />
    </div>
);

export default App;
