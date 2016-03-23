
import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap';
import Section, { FluffySection, DarkSection, SectionTitle } from './Section';
import { LeftColumn, WideLeftColumn, RightColumn, NarrowRightColumn } from './Columns';
import Testimonial, { TestimonialsCarousel } from './Testimonials';

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
        <TestimonialsCarousel keynames={['d3noob', 'aristides',
                                         'thomas_buhr', 'thomas_fee']}
                              className="margin-medium-bottom" />
        <DarkSection>
            <SectionTitle>Learning a new paradigm is hard</SectionTitle>
            <WideLeftColumn>
                <p>
		    React offers a completely new way of thinking about web applications.
		</p>

                <p>
                    No more strange spaghetti JavaScript. No more business logic tied to HTML. When was the last time you felt safe changing the nesting structure of your HTML? The last time you knew the app won't break just because a designer changed something?.
                </p>

                <p>
                    It's even worse with visualizations. Libraries that work juuuust a little differently than you'd want, d3.js code you wrote last time, but can't reuse anywhere else. And updating the visualization together with the rest of the interface is a beast.
                </p>

		<p>
		    React with d3.js fixes all of that.
                </p>
                <p>
                    But learning a whole new approach to coding is hard. It takes time and effort. Time you'd rather spend solving your real problems. Making code cleaner, easier to maintain, and delivering value to your users.
		</p>
            </WideLeftColumn>
            <NarrowRightColumn className="text-center">
                <span className="icon icon-frown icon-white icon-6x"></span>
            </NarrowRightColumn>
        </DarkSection>
    </div>
);

export default App;
