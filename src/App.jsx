
import React, { Component } from 'react';

import { Row, Col, Thumbnail } from 'react-bootstrap';
import { FluffySection } from './Section';
import { LeftColumn, RightColumn } from './Columns';

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

const BookIntro = () => (
    <FluffySection>
        <LeftColumn>
            <p>
		Creating dynamic data visualizations on the web is a pain in the ass.
	    </p>

	    <p>
                You either have to use dumbed down libraries that won't let you do what you want, or make everything from scratch. Every time.
            </p>
            <p>
                You want a <strong>quick way to build complex visualizations</strong>. Build once, use everywhere. In every project. Don't believe me? Scroll down.
	    </p>

	    <p>
		With <strong>React+d3.js</strong> you'll learn how to build re-usable visualization components in about an hour.
	    </p>

	    <p>
		<em><strong>Interested?<br/>
		    <a href="#packages">Go straight to the packages.</a></strong></em>
	    </p>
        </LeftColumn>
        <RightColumn>
            <figure className="text-center">
		<img src="img/cover.png" alt="React+d3js ES6 edition" className="img-thumbnail" />
	    </figure>
        </RightColumn>
    </FluffySection>
);

const App = () => (
    <div>
        <div className="bg-white-dark padding-small-top"></div>
        <Header />
        <BookIntro />
    </div>
);

export default App;
