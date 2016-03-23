
import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { SectionTitle } from './Section';
import { LeftColumn, WideLeftColumn, RightColumn, NarrowRightColumn, SingleColumn } from './Columns';

export const Why = () => (
    <div>
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
    </div>
);

export const What = () => (
    <div>
        <Row>
            <SectionTitle>React+d3.js the book</SectionTitle>
            <SingleColumn>
                <p>
		    React+d3.js is designed to be short, but comprehensive.
	        </p>

	        <p>
		    In about an hour, it will guide you through a whole React and d3.js project from start to finish.<br />
		    Everything from setting up code compilation, to creating reusable visualization components.
	        </p>
            </SingleColumn>
        </Row>
        <Row>
            <LeftColumn>
                <h3>React+d3.js</h3>

		<p>
		    Learn how to build reusable visualization components that work anywhere, with any data.
		</p>

		<p>
		    Fly through the code with to-the-point instructions and a healthy dose of interesting banter.
		</p>
            </LeftColumn>
            <RightColumn mdOffset={1}>
                <h3>Using React with d3.js</h3>

		<ul className="icons-ul">
		    <li><span className="icon-li icon-sitemap"></span>
			<strong>Declarative.</strong><br />
			Say what you want, not how.
		    </li>
		    <li><span className="icon-li icon-random"></span>
			<strong>Reusable.</strong><br />
			Code once, use everywhere.
		    </li>
		    <li><span className="icon-li icon-bolt"></span>
			<strong>Fast.</strong><br />
			Render only the stuff that changes.
		    </li>
		</ul>
            </RightColumn>
        </Row>
    </div>
);
