
import React from 'react';
import classNames from 'classnames';

import { Row, Col, Image, ButtonInput, Button } from 'react-bootstrap';

import Section, { SectionTitle, Panel } from './Section';
import { HalfColumn, FullColumn } from './Columns';

const StudentID = 'GXOpa';
const EngineerID = 'iWevQ';
const BusinessID = 'ygzt';

export const Business = () => (
    <div itemProp="offers" itemScope itemType="http://schema.org/Offer">
        <Row className="padding-medium-bottom">
            <SectionTitle nomargin md={12} mdOffset={0}>
                <span itemProp="name">The business package</span>

                <BigBuyButton id={BusinessID} price="399" className="pull-right" />
            </SectionTitle>
            <FullColumn className="lead" itemProp="description">
                The book, the resources, the 1-on-team coaching
            </FullColumn>
        </Row>
        <FeatureRow left="book" right="big_consulting" />
        <FeatureRow left="environment" right="screencast" />
        <FeatureRow left="projects" right="team_license" />
        <FeatureRow left="weekly_livecoding" />
    </div>
);

export const Engineer = () => (
    <div itemProp="offers" itemScope itemType="http://schema.org/Offer">
        <Row className="padding-medium-bottom">
            <SectionTitle nomargin md={12} mdOffset={0}>
                <span itemProp="name">Engineer package</span>

                <BigBuyButton id={EngineerID} price="79" className="pull-right" />
            </SectionTitle>
            <FullColumn className="lead" itemProp="description">
                The book, the resources, the 30min coaching
            </FullColumn>
        </Row>
        <FeatureRow left="book" right="small_consulting" />
        <FeatureRow left="environment" right="projects" />
        <FeatureRow left="screencast" right="weekly_livecoding" />
    </div>
);

export const Student = () => (
    <div itemProp="offers" itemScope itemType="http://schema.org/Offer">
        <Col md={4}>
        <Image src="img/ap-medium.png" alt="React+d3js ES6" thumbnail className="margin-big-top" />
        </Col>
        <Col md={8}>
        <h2 className="margin-bottom-none" nomargin>
            <span itemProp="name">Student</span>
            <BigBuyButton id={StudentID} price="19" className="pull-right" />
        </h2>
        <p className="lead" itemProp="description">The basics you need to get started</p>
        <p>
	    Creating visualizations with React and d3.js is an amazing experience that will make your life easier. That's why I want you to learn this material even if you're on a budget.
	</p>
	<p>
	    You'll get React+d3js ES6, a configured work environment, and the finished book project to play with.
	</p>
        </Col>
    </div>
);

export const BigBuyButton = ({ id, price, className }, context) => {
    let offer = price*context.offer.value,
        strike = offer == price ? '' : (<strike>${price}</strike>);

    return (
        <a className={classNames(className, 'btn btn-success btn-lg btn-xl btn-buy text-uppercase')}
           href={`https://gumroad.com/l/${id}/${context.offer.name}?wanted=true`}>
        <span className="text-white-dark">Buy now for {strike}</span> <span itemProp="price">${offer}</span>
    </a>
    )
};

BigBuyButton.contextTypes = {offer: React.PropTypes.shape(
    {name: React.PropTypes.string,
     value: React.PropTypes.number}
)};


const Features = {
    book: {
        img: 'img/ap-medium.png',
        title: 'React+d3js ES6',
        description: '115 pages of code samples and explanation in PDF, ePUB, or MOBI. A solid guide to building your first data visualization with React and d3.js.'
    },
    big_consulting: {
        img: 'img/me-special.png',
        title: '2hrs 1-to-team coaching',
        description: 'I will help your team apply the concepts from React+d3.js in your specific situation. Either in a call, or in person if possible.'
    },
    small_consulting: {
        img: 'img/me-special.png',
        title: '30min consulting',
        description: 'Schedule a call and I\'ll you apply the concepts from React+d3.js in your specific situation.'
    },
    environment: {
        img: 'img/environment.png',
        title: 'A configured work environment',
        description: 'A tested work environment with Webpack and Babel ready to go. Don\'t like Webpack? There\'s a Grunt+Browserify version too. Get started immediately.'
    },
    projects: {
        img: 'img/working-project.png',
        title: '7 sample projects',
        description: 'Git repositories with working projects built with React and d3js.'
    },
    screencast: {
        img: 'img/special-200.png',
        title: 'A screencast',
        description: 'Watch a step-by-step screencast of everything you\'ll read in the book. See code change and evolve before your eyes to create a visualization.'
    },
    team_license: {
        img: 'img/team.png',
        title: 'Unlimited team license',
        description: 'Share everything in the package with as many people on your team as you want. Any way you want.'
    },
    weekly_livecoding: {
        img: 'img/special-200.png',
        title: 'Weekly livecoding',
        description: (<span>Weekly livecoding sessions with React and d3js. Come say hi and <b>ask me anything</b></span>)
    }
};

export const FeatureRow = ({ left, right }) => (
    <Row className="padding-medium-top">
        <NamedFeature name={left} />
        <NamedFeature name={right} />
    </Row>
);

export const NamedFeature = ({ name }) => {
    if (!name) return (<span></span>);

    let { img, title, description } = Features[name],
        circle = name != 'book';

    return (
        <Feature img={img} title={title} description={description} circle={circle} />
    );
};

export const Feature = ({ img, title, description, circle }) => (
    <HalfColumn className="margin-small-top">
        <Row className="media">
            <figure className="pull-left col-xs-12 col-md-4 margin-small-bottom">
                <Image src={img} alt={title} thumbnail={!circle} circle={circle}
                       className="media-object" />
            </figure>
            <Col xs={12} md={7}>
            <h3 className="media-heading">{title}</h3>
            <p>{description}</p>
            </Col>
        </Row>
    </HalfColumn>
);


export const Picker = () => (
    <div>
        <a name="packages"></a>
        <h2 className="text-center">Choose a package</h2>
        <Col md={12}>
        <ul className="pricing-table list-unstyled panel row">
            <TablePackage name="student" price="19" id={StudentID} className="first" />
            <TablePackage name="engineer" price="79" id={EngineerID} />
            <TablePackage name="business" price="399" id={BusinessID} className="active" />
        </ul>
        </Col>
    </div>
);

const FeatureList = {
    student: ['React+d3js ES6 [PDF/epub/mobi]',
              'React+d3js ES5 [PDF/epub/mobi]',
              'Set up work environment',
              'Fully finished example project',
              'Weekly livecoding sessions',
              'Free updates',
              '45 day money-back guarantee'],
    engineer: ['React+d3js ES6 [PDF/epub/mobi]',
               'React+d3js ES5 [PDF/epub/mobi]',
               'Set up work environment',
               'Fully finished example project',
               '6 more sample projects',
               'Weekly livecoding sessions',
               (<b>30min 1-on-1 consulting</b>),
               (<b>10% off React&d3 workshops</b>),
               (<b>Free coffee when I'm in your city</b>),
               'Free updates',
               '45 day money-back guarantee'],
    business: ['React+d3js ES6 [PDF/epub/mobi]',
               'React+d3js ES5 [PDF/epub/mobi]',
               'Set up work environment',
               'Fully finished example project',
               '6 other projects',
               'Weekly livecoding sessions',
               (<b>2hrs 1-on-team coaching</b>),
               (<b>15% off React&d3 workshops</b>),
               (<b>Free coffee when I'm in your city</b>),
               (<b>Team license</b>),
               'Free updates',
               '45 day money-back guarantee'],
};


export const TablePackage = ({ name, price, id, className }) => (
    <li className={classNames(className, 'col-md-4')}>
	<h2 className="h3">{name}</h2>
	<ul>
            {FeatureList[name].map((f, i) => (<li key={name+i}>{f}</li>))}
	</ul>
	<p><BuyButton price={price} id={id} /></p>
    </li>
);



export const BuyButton = ({ id, price, className }, context) => {
    let offer = price*context.offer.value,
        strike = offer == price ? '' : (<strike>${price}</strike>);

    return (
        <a className={classNames(className, 'btn btn-default btn-lg btn-block btn-buy')}
           href={`https://gumroad.com/l/${id}/${context.offer.name}?wanted=true`}>
            <span className="text-uppercase">
                <span className="text-muted">Buy now for</span> {strike} ${offer}
            </span>
        </a>
    );
};

BuyButton.contextTypes = {offer: React.PropTypes.shape(
    {name: React.PropTypes.string,
     value: React.PropTypes.number}
)};
