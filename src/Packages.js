
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Row, Col, Image } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';

import { SectionTitle } from './Section';
import { HalfColumn, FullColumn } from './Columns';

const StudentID = 'GXOpa';
const EngineerID = 'iWevQ';
const BusinessID = 'ygzt';

const EverythingID = 'xtXkW';
const BookCourseID = 'QeAO';
const BookID = 'qhuDc';

export const Everything = () => (
    <div>
        <Row className="padding-medium-bottom">
            <SectionTitle nomargin md={12} mdOffset={0} id="packages">
                Book + Course + Coaching
                <BigBuyButton id={EverythingID} price={399} className="pull-right" />
            </SectionTitle>
            <FullColumn className="lead">
                The book, the interactive course, 1 week of personal coaching
            </FullColumn>
        </Row>
        <FeatureRow left="book" right="coaching" />
        <FeatureRow left="course" right="screencast" />
        <FeatureRow left="projects" right="weekly_livecoding" />
    </div>
);

export const BookCourse = () => (
    <div>
        <Row className="padding-medium-bottom">
            <SectionTitle nomargin md={12} mdOffset={0}>
                Book + Course
                <BigBuyButton id={BookCourseID} price={149} className="pull-right" />
            </SectionTitle>
            <FullColumn className="lead">
                The Book and the interactive course
            </FullColumn>
        </Row>
        <FeatureRow left="book" right="course" />
        <FeatureRow left="screencast" right="projects" />
        <FeatureRow left="weekly_livecoding" />
    </div>
);

export const Book = () => (
    <div>
        <Row className="padding-medium-bottom">
            <SectionTitle nomargin md={12} mdOffset={0}>
                Just the Book
                <BigBuyButton id={BookID} price={49} className="pull-right" />
            </SectionTitle>
            <FullColumn className="lead">
                The Book and some resources
            </FullColumn>
        </Row>
        <FeatureRow left="book" right="screencast_small" />
        <FeatureRow left="projects" right="weekly_livecoding" />
    </div>
);

export const Student = () => (
    <div itemProp="offers" itemScope itemType="http://schema.org/Offer">
        <Col md={4}>
        <Image src="img/ap-medium.png" alt="React+d3js ES6" thumbnail className="margin-big-top" />
        </Col>
        <Col md={8}>
        <h2 className="margin-bottom-none">
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
        strike = offer === price ? '' : (<strike>${price}</strike>);

    return (
        <a className={classNames(className, 'btn btn-success btn-lg btn-xl btn-buy text-uppercase')}
           href={`https://gumroad.com/l/${id}/${context.offer.name}?wanted=true`}
           data-gumroad-single-product="true">
        <span className="text-white-dark">Buy now for {strike}</span> <span itemProp="price">${offer}</span>
    </a>
    )
};

BigBuyButton.contextTypes = {
    offer: PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.number
    })
};


const Features = {
    book: {
        img: require('./img/cover.png'),
        title: 'React+D3v4',
        description: '249 pages of code samples and explanation in PDF, ePUB, or MOBI. A solid guide to building your first data visualization with React and d3.js.'
    },
    coaching: {
        img: 'img/me-special.png',
        title: '1 week of coaching',
        description: 'I will help you get started and review your code. Includes up to 1 hour video chat.'
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
        img: require('./img/examples/global-migrations.gif'),
        title: '7 full projects',
        description: 'Full working projects built with React and D3v4. I included my code history so you can learn from my mistakes.'
    },
    screencast: {
        img: require('./img/screencast.gif'),
        title: '7 Full HD screencasts',
        description: 'Get 7 full HD screencasts from my live streaming sessions and recap videos. Watch code evolve before your eyes.'
    },
    screencast_small: {
        img: require('./img/screencast.gif'),
        title: '3 Full HD screencasts',
        description: 'Get 3 full HD screencasts from my explainer videos.'
    },
    team_license: {
        img: 'img/team.png',
        title: 'Unlimited team license',
        description: 'Share everything in the package with as many people on your team as you want. Any way you want.'
    },
    weekly_livecoding: {
        img: require('./img/live_coding.png'),
        title: "Weekly livecoding",
        description: (<span>Weekly livecoding sessions with React, D3.js and others. Come watch me learn new technologies and solve coding problems live. <b>Ask me anything</b>, it's like office hours</span>)
    },
    course: {
        img: require('./img/examples/bouncing-ball.gif'),
        title: "Interactive course",
        description: "Learn React and D3v4 with executable code samples right in your browser"
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
        circle = !['book', 'screencast', 'screencast_small', 'weekly_livecoding'].includes(name);

    return (
        <Feature img={img} title={title} description={description} circle={circle} />
    );
};

export const Feature = ({ img, title, description, circle }) => (
    <HalfColumn className="margin-small-top">
        <Row className="media">
            <figure className="pull-left col-xs-12 col-md-4 margin-small-bottom">
                <LazyLoad verticalOffset={900} width={175}>
                    <Image src={img} alt={title} thumbnail={!circle} circle={circle}
                           className="media-object" />
                </LazyLoad>
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
        <h2 className="text-center">Choose a package</h2>
        <Col md={12}>
        <ul className="pricing-table list-unstyled panel row">
            <TablePackage name="book" price={49} id={BookID} className="first" />
            <TablePackage name="book+course" price={149} id={BookCourseID} />
            <TablePackage name="book+course+coaching" price={399} id={EverythingID} className="active" />
        </ul>
        </Col>
    </div>
);

const FeatureList = {
    book: ['React+D3v4 [PDF/epub/mobi]',
           '3 recap videos',
           '7 full projects',
           'Weekly livecoding sessions',
           'Free updates',
           'Money-back guarantee'],
    'book+course': ['React+D3v4 [PDF/epub/mobi]',
                    '3 recap videos',
                    '4 full HD screencasts',
                    '7 full projects',
                    'Weekly livecoding sessions',
                    (<b>Interactive course</b>),
                    'Free updates',
                    'Money-back guarantee'],
    'book+course+coaching': ['React+D3v4 [PDF/epub/mobi]',
                             '3 recap videos',
                             '4 full HD screencasts',
                             '7 full projects',
                             'Weekly livecoding sessions',
                             (<b>Interactive course</b>),
                             (<b>1 week personal coaching</b>),
                             'Free updates',
                             'Money-back guarantee'],
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
        strike = offer === price ? '' : (<strike>${price}</strike>);

    return (
        <a className={classNames(className, 'btn btn-default btn-lg btn-block btn-buy')}
           href={`https://gumroad.com/l/${id}/${context.offer.name}?wanted=true`}
           data-gumroad-single-product="true">
            <span className="text-uppercase">
                <span className="text-muted">Buy now for</span> {strike} ${offer}
            </span>
        </a>
    );
};

BuyButton.contextTypes = {
    offer: PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.number
    })
};
