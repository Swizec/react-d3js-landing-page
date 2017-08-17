
import React from 'react';
import { Row, Col, Image, FormControl } from 'react-bootstrap';
import YouTube from 'react-youtube';
import LazyLoad from 'react-lazy-load';

import Section, { LowSection, SectionTitle, Panel } from './Section';
import { LeftColumn, WideLeftColumn, RightColumn, NarrowRightColumn, SingleColumn, MiddleColumn } from './Columns';
import { TOCUl, MainLi, SubLi, openDripForm } from './helpers';
import Example from './Examples';
import FeaturedIn from './Featured';

import coverImg from './img/cover2.png';

export const Header = () => (
    <header className="text-left container">
        <Row>
            <Col md={10} mdOffset={1}>
	    <h1>Stuck copy pasting random D3 examples?</h1>
	    <p className="lead"><b>Become a data visualization engineer</b> with React + D3v4.</p>
            </Col>
	</Row>
    </header>
);

export const BookIntro = ({ className }) => (
    <LowSection className={className}>
        <LeftColumn>
            <p>
		Creating <b>dynamic</b> and <b>interactive data visualizations</b> on the web is a pain in the ass. It gets <i>really</i> hard when you add <b>animation</b>, inter-connected <b>dashboards</b>, and <b>fast performance</b> on mobile devices.
            </p>
            <p>
                You're either using <b>libraries you can't customize</b>, <b>copy pasting D3 examples</b> you don't understand, or <b>battling documentation</b> to write spaghetti <b>code you can't reuse</b>.
            </p>
            <p>
                It's okay, we've all been there.
            </p>
            <p>
                But it doesn't have to be that way.
            </p>
            <p>
                 With <b>React+D3v4</b> you'll learn <b>the basics</b> of building <b>fast data visualization components</b> in about an hour. Get started <b>immediately without installing anything</b>.
            </p>
            <p>
                Don't know React? <b>React+D3v4 starts at the very beginning</b>.
            </p>
            <p>
                Struggling with D3? <b>Every function is explained</b>.
            </p>
            <p>
                New to modern JavaScript syntax? React+D3v4 comes with an <b>interactive ES6 cheatsheet</b>.
            </p>
            <p>
                Get the confidence you need to excell.💪
            </p>
	    <p>
		<em><strong>Ready to get started?<br/>
		    <a href="#free-sample">Try the free chapter.👇</a></strong></em>
	    </p>
        </LeftColumn>
        <RightColumn style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 800}}>
            <figure className="text-center">
                <a href="" onClick={openDripForm}>
                    <LazyLoad verticalOffset={800} width={520}>
		        <img src={coverImg}
                             alt="React+D3v4 edition"
                             className="img-thumbnail"
                             itemProp="image" />
                    </LazyLoad>
                </a>
	    </figure>
        </RightColumn>
    </LowSection>
);

export const SampleLink = ({ jump }) => (
    <Row className="text-center">
        <p>
	    <em><strong>Ready to get started?<br/>
	        <a href="#free-sample">Try the free chapter. 👇</a></strong>
                <br/><span style={{fontSize: '0.8em'}}>Or {jump ? <a href="#packages">jump to packages 👉</a> : "scroll down for packages"}</span>
            </em>
        </p>
    </Row>
);


export const Why = () => (
    <div>
        <SectionTitle>Learning a new coding paradigm is hard</SectionTitle>
        <WideLeftColumn>
            <p>
                <b>React is the biggest revolution</b> in JavaScript programming since jQuery hit the scene 10 years ago, and <b>D3 is unlike anything</b> you've seen before.
            </p>
            <p>
                <em>"How the hell is it doing that?"</em> is the most common phrase I hear when teaching people about React and D3. <em>"What do I put in a component? Should it be a state or a prop? These D3 examples don't make any sense"</em>
            </p>
            <p>
                The problem comes from how most of us first learn to code. <em>"It's like a cooking recipe"</em>, teachers will say.</p>
            <p>
                Take a bellpepper and cut it up. Then sprinkle some salt and pepper, add olive oil, and voila: you have a refreshing salad. A very simple salad with a single ingredient, but it's a salad. You can follow along and eventually you will understand what the code does.
            </p>
            <p>
                That's called imperative programming. It reads as a series of steps. <em>How</em> to do something.
            </p>
            <p>
                But React and D3 are declarative. <b>You don't write <em>How</em> you want your code to work, you write <em>What</em> you want to achieve</b>. Your bellpepper salad recipe looks more like this: <br />
                &lt;Salad&gt;<br/>
                &nbsp;&nbsp;&lt;Oil /&gt;<br/>
                &nbsp;&nbsp;&lt;Bellpepper cut salted /&gt;<br/>
                &lt;/Salad&gt;<br/>
            </p>
            <p>
                You look at that and you immediately know it's a salad. It involves oil and bellpeppers. You don't have to read all the steps to know the result. <b>The recipe declares what it's making</b>.
            </p>
            <p>
                Declarative code makes your project <b>cleaner</b> and <b>easier to maintain</b>, which means you <b>spend more time delivering value to your users and clients</b>.
            </p>
            <p>
                But <b>learning how to think declaratively</b> is hard. It feels like voodoo <b>magic until you get used to it</b>. We've all been there. To this day it still hurts my brain sometimes.
            </p>
            <p>
                That's why <b>React+D3v4</b> takes you on a journey through <b>7 projects</b> and <b>5 interactive examples</b>. <b>Learn the basics in about an hour</b> then dive as deep as you want to solidify your knowledge. Get <b>the confidence you need to excell</b> at your job.
            </p>
        </WideLeftColumn>
        <NarrowRightColumn className="text-center">
            <span className="icon icon-frown icon-white icon-6x"></span>
        </NarrowRightColumn>
    </div>
);

export const WhatExplain = () => (
        <Row>
            <SectionTitle>Become a data visualization engineer with React+D3v4</SectionTitle>
            <SingleColumn>
                <p>
		    React+D3v4 gives you a <b>quick overview of the basics</b> to get you started, followed by a <b>deep dive</b> that <b>solidifies your knowledge</b> through varied projects and examples. <b>Build working code</b> that you can <b>show off to your friends, boss, and coworkers</b>.
	        </p>
                <p>
                    Learn the basics with <b>interactive examples right in your browser</b> &mdash; no need to install anything. Forget about Npm and Webpack and Babel and Node. <b>Just React and D3</b>.
                </p>
                <p>
                    <b>Dive into 7 projects</b> that teach you how it all fits together. Build <b>interactive visualizations</b>, create <b>animations</b>, and build <b>fast performance with canvas</b>. Learn everything there is to know about building <b>beautiful apps with React and D3</b>.
                </p>
                <p>
                    From the very <b>basics of React and D3</b>, to state handling with <b>Redux</b> and <b>MobX</b>, React alternatives like <b>Preact</b> and <b>Inferno</b>.
                </p>
            </SingleColumn>
        </Row>
);

export const WhatExamples = () => (
    <div>
        <Row className="margin-small-bottom">
            <SingleColumn>
                <h3>React+D3v4 gives you practical examples 👇</h3>
            </SingleColumn>
        </Row>
        <Example which="choropleth-map" left />
        <Example which="histogram" right />
        <Example which="dashboard" />
        <Example which="rainbow-snake" left />
        <Example which="alphabet" right />
        <Example which="particles" left />
        <Example which="bouncing-marbles" right />
        <Example which="dancing-tree" />
    </div>
);

export const WhatDetails = () => (
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
            <SectionTitle nomargin id="free-sample">Start with a free chapter and email crash course</SectionTitle>
            <SingleColumn className="lead">See what React+D3v4 is like and learn the basics.</SingleColumn>
        </Row>

        <Row>
            <SingleColumn>
                <Panel>
                    <LazyLoad verticalOffset={900} height={500}>
                        <Image src={require('./img/sample.png')} rounded responsive />
                    </LazyLoad>
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
            <SingleColumn className="lead">Watch my talks from HTML5DevConf and the Bay Area D3 Meetup</SingleColumn>
        </Row>
        <Row className="text-center">
            <YouTube videoId="UP1nCXG2t4M" opts={{width: 853, height: 480}} />
        </Row>
        <Row>
            <SingleColumn>
                <p>The talk shows a proof of concept approach to making fancy animations with React and d3js - a Space Invaders game. I explain the basic approach, where I got the idea, and show off some code.</p>
                <p>You don't have to watch the whole talk, it's all in React+D3v4.</p>
            </SingleColumn>
        </Row>
        <Row className="text-center">
            <YouTube videoId="47uMw-2mb4U" opts={{width: 853, height: 480}} />
        </Row>
        <Row>
            <SingleColumn>
                <p>
                    This talk is more hands on. I show how the animated alphabet, particle generator, and talk about the benefits of componentization when it comes to building modern data visualization.
                </p>
            </SingleColumn>
        </Row>
    </div>
);

export const SampleForm = () => (
    <DripForm id="5362865">
        <h3 data-drip-attribute="headline">
            React+D3v4 sample chapter and email course
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
            <SectionTitle nomargin>7 full HD screencasts</SectionTitle>
            <SingleColumn className="lead text">Watching code appear before your eyes makes it easier to understand.</SingleColumn>
        </Row>
        <Row>
            <SingleColumn>
                <div className="text-center">
                    <LazyLoad verticalOffset={900} height={500}>
                        <Image src={require('./img/screencast.gif')} alt="screencast-preview" thumbnail />
                    </LazyLoad>
                </div>
                <p>
                    Get 7 full HD screencasts from my live streaming sessions and recap videos. <b>Watch me build</b> some of the examples in React+D3v4 from scatch. Including mistakes and <b>thought process behind every decision</b>.
		</p>
                <p>
                    Watch <b>extra projects</b> that don't feature in the book. Like a map of global migrations and a visualization of FreeCodeCamp developer survey data.
                </p>
            </SingleColumn>
        </Row>
    </div>
);

export const Course = () => (
    <div>
        <Row>
            <SectionTitle nomargin>A Course with interactive code samples</SectionTitle>
            <SingleColumn className="lead text">Learn React and D3v4 with executable code samples right in your browser</SingleColumn>
        </Row>
        <Row>
            <SingleColumn>
                <div className="text-center">
                    <LazyLoad verticalOffset={900} height={650}>
                        <Image src={require('./img/examples/bouncing-ball.gif')} thumbnail style={{height: '660px'}} />
                    </LazyLoad>
                </div>
                <p>
                    Learn faster by doing, <b>no installation needed</b>. 33+ live playgrounds where you can <b>read</b> through my code, <b>run</b> to see what it does, and <b>edit</b> components to see what happens. You can <b>save</b> every playground and come back later.
                </p>
            </SingleColumn>
        </Row>
    </div>
)

export const Author = () => (
    <Row itemProp="brand" itemScope itemType="http://schema.org/Brand">
        <LeftColumn className="padding-big-top margin-medium-top">
            <figure className="text-center">
                <LazyLoad verticalOffset={900}>
                    <Image src={require('./img/swizec.png')} alt="Swizec Teller" circle responsive className="margin-medium-top" itemProp="logo" />
                </LazyLoad>
            </figure>
        </LeftColumn>
        <RightColumn>
            <h2>About the Author</h2>
	    <p>
                Hi, I’m <b>Swizec Teller</b>. I help <b>coders become software engineers</b>.
            </p>
            <p>
                Over the years I've helped over <b>10,000 engineers</b> hone their craft. People from Uber, Oracle, Apple and many others have used my <b>books, articles, and talks</b> to improve their technical skills, get promotions, change jobs, and ship their products faster.
            </p>
            <p>
                Story time 👇
            </p>
            <p>
                React+D3 started as a bet in April 2015. A friend wanted to learn React and challenged me to publish a book. A month later React+D3 launched with 79 pages of hard earned knowledge.
            </p>
            <p>
                In April 2016 it became React+D3 ES6. 117 pages and growing beyond a single big project it was a huge success. I kept going, started live streaming, and publishing videos on YouTube.
            </p>
            <p>
                It's 2017 now and after 10 months of work, <b>React+D3v4</b> is <b>the best book I've ever written</b>. 249 pages, many examples, much code to play with. It's designed like a step-by-step course so you can <b>follow along without breaking a sweat</b>.
            </p>
            <p>
                I based React+D3v4 on <b>20 years of experience</b> with learning how to code <b>on my own</b>, reading blogs and articles, listening to <b>professors</b>, and <b>working with mentors</b>. Yes, that means I wrote my <b>first program when I was 9</b>. I've been doing this all my life and that's why <b>I know every learning technique</b> inside and out.
            </p>
            <p>
                Some of my work has been featured in  👇
            </p>
            <FeaturedIn />
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
		    Is React+D3v4 for me?
		</h2>
		<p>
		    Yes. <br />
                    If you already know JavaScript and perhaps some React and D3, this book is perfect. It's designed with React and D3 beginners in mind. If you're a veteran, you might want to skip some sections.
                    But if you're new to web programming, I suggest finding something easier.
 		</p>
            </Col>
            <Col md={5}>
                <h2>
		    Which package should I choose?
		</h2>
		<p>
		    That depends on your preferred style of learning.<br />
                    The book is great if you like to learn the basics in your browser, then switch to a real editor and local environment to go deep.<br/>
                    The interactive course is great if you'd prefer to stay in your browser throughout.<br />
                    Coaching is perfect if you have specific questions or prefer explanations tailored to you personally.<br />
                    The videos are great, if you like to see how everything fits together visually.
		</p>
            </Col>
        </Row>
        <Row>
            <Col md={5} mdOffset={1}>
            <h2>I don't like React. Is React+D3v4 still useful?</h2>
            <p>
                Yes! You can apply the core ideas behind React+D3v4 to any modern framework. Angular, Vue, or anything else that aims to separate business and rendering logic with a declarative approach.
            </p>
            </Col>
        </Row>
        <Row>
            <Col md={5} mdOffset={1}>
                <h2>
		    What if I hate React+D3v4?
		</h2>
		<p>
                    Send me an email and I'll click the magic refund button. You even get to keep the book.
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

export const Subscription = () => (
    <Row>
        <SingleColumn className="text-center lead margin-medium-top margin-medium-bottom">
            Too expensive? <a href="https://www.patreon.com/swizec">Try a subscription instead 👉</a>
        </SingleColumn>
    </Row>
);
