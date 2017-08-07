
import React from 'react';
import { Row, Col, Image, FormControl } from 'react-bootstrap';
import YouTube from 'react-youtube';

import Section, { SectionTitle, Panel } from './Section';
import { LeftColumn, WideLeftColumn, RightColumn, NarrowRightColumn, SingleColumn, MiddleColumn } from './Columns';
import { openDripForm, TOCUl, MainLi, SubLi } from './helpers';

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
    <Section className={className}>
        <LeftColumn>
            <p>
                Did you know software <b>engineers make $20,000/year more than programmers</b>? I had no idea a simple job title meant that much until I built some graphs and saw the difference. I never called myself a programmer again.
            </p>
            <p>
		But creating <b>dynamic</b> and <b>interactive data visualizations</b> on the web is a pain in the ass. It gets <i>really</i> hard when you add <b>animation</b>, inter-connected <b>dashboards</b>, and <b>fast performance</b> on mobile devices.
            </p>
            <p>
                You're either using <b>libraries you can't customize</b>, <b>copy pasting D3 examples</b> you don't understand, or <b>battling documentation</b> to write spaghetti <b>code you can't reuse</b>.
            </p>
            <p>
                Trust me, we've all been there.
            </p>
            <p>
                But it doesn't have to be that way. With <b>React+D3v4</b> you'll learn <b>the basics</b> of building <b>fast data visualization components</b> in about an hour. Get started <b>immediately without installing anything</b>, right in your browser.
            </p>
            <p>
                Don't know React? <b>React+D3v4 starts at the very beginning</b>. Struggling with D3? <b>Every function is explained</b>. New to modern JavaScript syntax? React+D3v4 <b>comes with an interactive ES6 cheatsheet</b>.
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
                <a href="#free-sample">
		    <img src={coverImg}
                         alt="React+D3v4 edition"
                         className="img-thumbnail get_sample"
                         itemProp="image" />
                </a>
	    </figure>
        </RightColumn>
    </Section>
);

export const SampleLink = () => (
    <Row className="text-center">
        <p>
	    <em><strong>Ready to get started?<br/>
	        <a href="#free-sample">Try the free chapter. 👇</a></strong>
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
                <b>React is the biggest revolution</b> in JavaScript programming since jQuery came on the scene 10 years ago, and <b>D3 is unlike anything</b> you've ever seen before.
            </p>
            <p>
	        If you're a seasoned veteran, or a fresh beginner, React and D3 can <b>leave you scratching your head</b>. You look at the code and you understand the individual words and functions, and stuff makes sense on its own, but you put them together and <b>it looks like magic</b>.
	    </p>
            <p>
                <em>"How the hell is it doing that?"</em> is the most common phrase I hear when teaching people about React and D3.
            </p>
            <p>
                You see, the problem comes from how we all start writing code. <em>"It's like a cooking recipe"</em>, teachers will say.</p>
            <p>
                Take a bellpepper and cut it up. Then sprinkle some salt and pepper, add olive oil, and voila: you have a refreshing salad. A very simple salad with a single ingredient, but a salad nontheless.
            </p>
            <p>
                That's called imperative programming. It reads as a series of steps. <em>How</em> to do something.
            </p>
            <p>
                React and D3, on the other hand, are declarative. <b>You don't write <em>How</em> you want your code to work, you write <em>What</em> you want to achieve</b>. Your bellpepper salad recipe looks more like this: <br />
                &lt;Salad&gt;<br/>
                &nbsp;&nbsp;&lt;Oil /&gt;<br/>
                &nbsp;&nbsp;&lt;Bellpepper cut salted /&gt;<br/>
                &lt;/Salad&gt;<br/>
            </p>
            <p>
               You look at that and you immediately know you're going to get a salad that includes oil and bellpeppers. No need to carefully study the entire recipe to understand what you're making. The recipe <i>declares</i> what it's making.
            </p>
            <p>
                Declarative code makes your project <b>cleaner</b> and <b>easier to maintain</b>, which means you <b>spend more time delivering value to your users and clients</b>.
            </p>
            <p>
                But <b>learning how to think declaratively</b> is hard. It feels like voodoo magic until you get used to it. Believe me, we've all been there. It still hurts my brain sometimes.
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
            <SectionTitle nomargin id="free-sample">Get a free sample</SectionTitle>
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
