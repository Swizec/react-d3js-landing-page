
import React from 'react';
import { Row, Col, Image, FormControl } from 'react-bootstrap';
import YouTube from 'react-youtube';

import Section, { SectionTitle, Panel } from './Section';
import { LeftColumn, WideLeftColumn, RightColumn, NarrowRightColumn, SingleColumn, MiddleColumn } from './Columns';
import { openDripForm, TOCUl, MainLi, SubLi } from './helpers';

export const Header = () => (
    <header className="text-left container">
        <Row>
            <Col md={10} mdOffset={1}>
	    <h1>Become a data visualization engineer</h1>
	    <p className="lead">React with D3v4 in ES6 is the best way to <b>turn data into knowledge</b>.</p>
            </Col>
	</Row>
    </header>
);

export const BookIntro = ({ className }) => (
    <Section className={className}>
        <LeftColumn>
            <p>
                Did you know software <b>engineers make $20,000 more than programmers</b>? I had no idea it was <i>that</i> bad until I built some shiny graphs and saw the difference. I never called myself a programmer again.
            </p>
            <p>
		But creating <b>dynamic and interactive data visualizations</b> on the web is a pain in the ass.
	    </p>

	    <p>
                You either have to use dumbed down libraries that won't let you do advanced custom stuff, or make everything from scratch. Every time.
            </p>
            <p>
                You want a <strong>quick way to build complex visualizations</strong>. Build once, use everywhere. In every project. Don't believe me? Scroll down to the gallery.
	    </p>

	    <p>
		With <strong itemProp="name">React+d3js ES6</strong> you'll <span itemProp="description">learn how to build re-usable visualization components in about an hour</span>.
	    </p>

	    <p>
		<em><strong>Wanna learn?<br/>
		    <a href="#free-sample">Start with a free chapter.</a></strong></em>
	    </p>
        </LeftColumn>
        <RightColumn style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 700}}>
            <figure className="text-center">
		<img src="img/cover.png"
                     alt="React+D3v4 edition"
                     className="img-thumbnail get_sample"
                     itemProp="image"
                     onClick={openDripForm} />
	    </figure>
        </RightColumn>
    </Section>
);

export const SampleLink = () => (
    <Row className="text-center">
        <p>
	    <em><strong>Wanna build cool stuff?<br/>
	        <a href="#free-sample">Start with a free chapter and crash course.</a></strong>
                <br/><span style={{fontSize: '0.8em'}}>Or scroll down for packages</span>
            </em>
        </p>
    </Row>
);


export const Why = () => (
    <div>
        <SectionTitle>Learning a new paradigm is hard</SectionTitle>
        <WideLeftColumn>
            <p>
	        React offers a completely new way of thinking about web applications.
	    </p>

            <p>
                No more strange spaghetti JavaScript. No more business logic tied to HTML. When was the last time you felt safe changing the nesting structure of your HTML? The last time you knew the app won't break just because your designer made a change?.
            </p>

            <p>
                It's even <b>worse with visualizations</b>. Libraries that work juuuust a little differently than you want, d3.js code you wrote last time, but can't reuse anywhere else. And updating the visualization together with the rest of the interface is a beast.
            </p>

	    <p>
	        React with d3.js fixes all of that.
            </p>
            <p>
                But learning a whole new approach to coding is hard. It takes time and effort. Time you'd rather spend solving your real problems. Making code <b>cleaner</b>, <b>easier to maintain</b>, and <b>delivering value to your users</b>.
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
            <SectionTitle>React+d3js ES6</SectionTitle>
            <SingleColumn>
                <p>
		    React+d3js ES6 is designed to be short, but comprehensive.
	        </p>

	        <p>
		    In about an hour, it guides you through a whole React and d3.js project from start to finish. Using code written in <b>modern ES6</b> fully <b>compatible with React 15</b>.<br />
		    Everything from setting up code compilation with Webpack and Babel, to creating reusable visualization components. There's even a whole <b>3,000 word section on animations</b> and using Redux data changes as an animation and game engine.
	        </p>
            </SingleColumn>
        </Row>
        <Row>
            <LeftColumn>
                <h3>React+d3js ES6</h3>

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

export const Index = () => (
    <div>
        <Row>
            <SectionTitle nomargin>What's in the book</SectionTitle>
            <SingleColumn className="lead">Table of contents</SingleColumn>
        </Row>

        <Row>
            <SingleColumn>
                <h3>Introduction</h3>
                <TOCUl>
                    <MainLi>Foreword</MainLi>
                    <MainLi>Why you should read React + D3v4</MainLi>
                    <MainLi>What you need to know</MainLi>
                    <MainLi>How to read this book</MainLi>
                    <MainLi>Why React and D3.js</MainLi>
                    <MainLi>Buzzword soup explained</MainLi>
                    <MainLi>JSX</MainLi>
                </TOCUl>
                <h3>Visualizing data with React and d3.js</h3>
                <TOCUl>
                    <MainLi>The basic approach</MainLi>
                    <MainLi>Blackbox Components</MainLi>
                    <SubLi>A quick blackbox example - a D3 axis</SubLi>
                    <SubLi>A quick blackbox example - a React+D3 axis</SubLi>
                    <MainLi>A D3 blackbox higher order component – HOC</MainLi>
                    <MainLi>Full-feature Integration</MainLi>
                    <SubLi>A color scale</SubLi>
                    <MainLi>You’re awesome</MainLi>
                    <MainLi>State Handling Architecture</MainLi>
                    <SubLi>Basic architecture</SubLi>
                    <SubLi>A caveat</SubLi>
                    <MainLi>Structuring your React app</MainLi>
                    <MainLi>Set up a local environment with create-react-app</MainLi>
                    <SubLi>Make sure you have node.js</SubLi>
                    <SubLi>Install create-react-app</SubLi>
                    <SubLi>Run create-react-app</SubLi>
                    <SubLi>What you get</SubLi>
                    <SubLi>Install dependencies for this book</SubLi>
                </TOCUl>
                <h3>A big example project - 176,113 tech salaries visualized</h3>
                <TOCUl>
                    <MainLi>Show a Preloader</MainLi>
                    <SubLi>Step 1: Get the image</SubLi>
                    <SubLi>Step 2: Preloader component</SubLi>
                    <SubLi>Step 3: Update App</SubLi>
                    <SubLi>Step 4: Load Bootstrap styles</SubLi>
                    <MainLi>Asynchronously load data</MainLi>
                    <SubLi>Step 0: Get the data</SubLi>
                    <SubLi>Step 1: Prep App.js</SubLi>
                    <SubLi>Step 2: Prep data parsing functions</SubLi>
                    <SubLi>Step 3: Load the datasets</SubLi>
                    <SubLi>Step 4: Tie the datasets together</SubLi>
                    <MainLi>Render a choropleth map of the US</MainLi>
                    <SubLi>Step 1: Prep App.js</SubLi>
                    <SubLi>Step 2: CountyMap/index.js</SubLi>
                    <SubLi>Step 3: CountyMap/CountyMap.js</SubLi>
                    <SubLi>Step 4: CountyMap/County.js</SubLi>
                    <MainLi>Render a Histogram of salaries</MainLi>
                    <SubLi>Step 1: Prep App.js</SubLi>
                    <SubLi>Step 2: CSS changes</SubLi>
                    <SubLi>Step 3: Histogram component</SubLi>
                    <SubLi>Step 4: HistogramBar (sub)component</SubLi>
                    <SubLi>Step 5: Axis HOC</SubLi>
                    <MainLi>Make it understandable - meta info</MainLi>
                    <SubLi>Dynamic title</SubLi>
                    <SubLi>Dynamic description</SubLi>
                    <SubLi>Median household line</SubLi>
                    <MainLi>Add user controls for data slicing and dicing</MainLi>
                    <SubLi>Step 1: Update App.js</SubLi>
                    <SubLi>Step 2: Build Controls component</SubLi>
                    <SubLi>Step 3: Build ControlRow component</SubLi>
                    <SubLi>Step 4: Build Toggle component</SubLi>
                    <SubLi>Step 5: Add US state and Job Title filters</SubLi>
                    <MainLi>A small speed optimization</MainLi>
                    <MainLi>Rudimentary routing</MainLi>
                    <MainLi>Prep for launch</MainLi>
                    <SubLi>Setting up deployment</SubLi>
                    <SubLi>Twitter and Facebook cards and SEO</SubLi>
                    <SubLi>Full dataset</SubLi>
                    <MainLi>Launch!</MainLi>
                </TOCUl>
                <h3>Animation</h3>
                <TOCUl>
                    <MainLi>Using a game loop for rich animation</MainLi>
                    <SubLi>A bouncing ball</SubLi>
                    <MainLi>Using transitions for simple animation</MainLi>
                    <SubLi>Rainbow snake</SubLi>
                    <MainLi>Enter/update/exit animation</MainLi>
                    <SubLi>Animated alphabet</SubLi>
                    <MainLi>Animating with React, Redux, and d3</MainLi>
                    <SubLi>Here’s how it works</SubLi>
                    <SubLi>3 presentation components</SubLi>
                    <SubLi>6 Redux Actions</SubLi>
                    <SubLi>1 Container component</SubLi>
                    <SubLi>1 Redux Reducer</SubLi>
                    <SubLi>What we learned</SubLi>
                </TOCUl>
                <h3>Speed optimizations</h3>
                <TOCUl>
                    <MainLi>Using canvas</MainLi>
                    <SubLi>Why Canvas</SubLi>
                    <SubLi>The trouble with HTML5 Canvas</SubLi>
                    <MainLi>Declarative HTML5 Canvas with Konva and react-konva</MainLi>
                    <SubLi>A particle generator pushed to 20,000 elements with Canvas</SubLi>
                    <SubLi>Billiards simulation with MobX and canvas</SubLi>
                    <MainLi>Using a React alternative like Preact or Inferno</MainLi>
                    <SubLi>Stress testing with a recursive fractal</SubLi>
                    <SubLi>Trying the stress test in Preact and Inferno</SubLi>
                </TOCUl>
                <h3>Conclusion</h3>
                <h3>Appendixes</h3>
                <TOCUl>
                    <MainLi>Appendix A - roll your own environment</MainLi>
                    <MainLi>Appendix B - Browserify-based environment</MainLi>
                </TOCUl>
            </SingleColumn>
        </Row>
    </div>
);

export const FreeSample = () => (
    <div>
        <Row>
            <SectionTitle nomargin>Get a free sample</SectionTitle>
            <SingleColumn className="lead">See what the book is like.</SingleColumn>
        </Row>

        <Row>
            <SingleColumn>
                <Panel>
                    <Image src="img/sample.png" rounded responsive />
                    <SampleForm />
                </Panel>
            </SingleColumn>
        </Row>
    </div>
);

export const Talk = () => (
    <div>
        <Row>
            <SectionTitle nomargin>Reusable data visualization with React and d3.js</SectionTitle>
            <SingleColumn className="lead">Watch my talk from HTML5DevConf 2015</SingleColumn>
        </Row>
        <Row className="text-center">
            <YouTube videoId="UP1nCXG2t4M" opts={{width: 853, height: 480}} />
        </Row>
        <Row>
            <SingleColumn>
                <p>The talk shows a proof of concept approach to making fancy animations with React and d3js - a Space Invaders game. I explain the basic approach, where I got the idea, and show off some code.</p>
                <p>You don't have to watch the whole talk, it's all in the React+d3js ES6 book.</p>
            </SingleColumn>
        </Row>
    </div>
);

export const SampleForm = () => (
    <DripForm id="5362865">
        <h3 data-drip-attribute="headline">
            React+d3.js sample chapter and mini-course
        </h3>
        <p data-drip-attribute="description">
            Leave your email and get a free sample of React+d3.js and a mini email course. They will teach you about the basic architecture of React apps and show you how JSX makes your code better.
        </p>
    </DripForm>
);

export const DripForm = ({ id, children }) => {
    let url = `https://www.getdrip.com/forms/${id}/submissions`;

    return (
        <form action={url} method="post" target="_blank" data-drip-embedded-form={id}>
            {children}
            <MiddleColumn>
                <FormControl type="text" placeholder="Email"
                             label="Email Address" name="fields[email]" />
                <input type="submit" name="submit" value="Sign Up"
                       data-drip-attribute="sign-up-button"
                       className="btn btn-lg btn-success text-uppercase" />
            </MiddleColumn>
        </form>
    );
};

export const Screencast = () => (
    <div>
        <Row>
            <SectionTitle nomargin>Full HD screencast</SectionTitle>
            <SingleColumn className="lead text">Watching code appear before your eyes makes it easier to understand.</SingleColumn>
        </Row>
        <Row>
            <SingleColumn>
                <div className="text-center">
                    <Image src="img/screencast.gif" alt="screencast-preview" thumbnail />
                </div>
                <p>
		    A 60 minute full HD screencast will guide you through everything in the book and show you just how it all fits together.
		</p>

		<p>
		    Don't miss something just because you made a typo.
		</p>
            </SingleColumn>
        </Row>
    </div>
);

export const Author = () => (
    <Row itemProp="brand" itemScope itemType="http://schema.org/Brand">
        <LeftColumn className="padding-big-top margin-medium-top">
            <figure className="text-center">
                <Image src="img/me.png" alt="Swizec Teller" circle responsive className="margin-medium-top" itemProp="logo" />
            </figure>
        </LeftColumn>
        <RightColumn>
            <h2>About the Author</h2>
	    <p>Hi, I’m <span itemProp="name">Swizec Teller</span>. A digital nomad and full stack web engineer.</p>
            <p>I travel the world and help startups win. From setting up new teams and training juniors, to fixing spaghetti code and implementing new features.</p>
            <p>My code has been used by MasterCard, Commerzbank, Google, Mashable, Lyft, and many others.</p>
            <p>When I’m not coding, I’m writing.</p>
            <p>At least 5000 people bought my books ... I don’t know if that’s a lot, but it’s more than zero. I like that.</p>
            <p>My work has been featured in Business Insider, LifeHacker, Huffington Post, and several dead-tree magazines. I’ve spoken on BBC Radio, appeared on Slovenian national television, and given talks all over the world.</p>
        </RightColumn>
    </Row>

);

export const Questions = () => (
    <SingleColumn>
        <p className="text-center"><strong>Questions?</strong> Please <a href="mailto:swizec@swizec..com"><span className="icon icon-envelope-alt"></span>&#32;drop me a line</a> and I&#8217;ll do my best to answer them.</p>
    </SingleColumn>
);

export const FAQ = () => (
    <div>
        <Row>
            <Col md={5} mdOffset={1}>
                <h2>
		    Is React+d3.js for me?
		</h2>
		<p>
		    Yes. <br />If you already know JavaScript and you've tried d3.js before, this is the book for you. If you just want to learn about React, that's great too. Test readers said it's great for learning how to use React.<br />
                    But if you're new to web programming, I suggest finding something easier.
 		</p>
            </Col>
            <Col md={5}>
                <h2>
		    Which package should I choose?
		</h2>
		<p>
		    That depends on what you need. If you're a single developer trying to learn about React and writing reusable visualization components, go for the Engineer package. Some of the material looks better when it moves.<br/>
                    But if you have a team that's growing,  go for the Business package. I'll set up a call to help you apply these principles in your specific case. And you'll get a license that lets you share the book with all team members.
		</p>
            </Col>
        </Row>
        <Row>
            <Col md={5} mdOffset={1}>
                <h2>
		    What if I hate React+d3js ES6?
		</h2>
		<p>
                    That's fair. I have a 45-day full money back guarantee. Just send me an email.
		</p>
            </Col>
            <Col md={5}>
                <h2>
		    I have another question!
		</h2>
		<p>
		    Awesome! Just ping me on twitter or send me an email. I'm @swizec.
		</p>
            </Col>
        </Row>
    </div>
);
