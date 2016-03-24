
import React from 'react';
import classNames from 'classnames';

import { Row, Col, Image, ButtonInput, Button } from 'react-bootstrap';

import Section, { SectionTitle, Panel } from './Section';
import { HalfColumn, FullColumn } from './Columns';

export const Business = () => (
    <div>
        <Row className="padding-medium-bottom">
            <SectionTitle nomargin md={12} mdOffset={0}>
                The business package

                <BigBuyButton id="nXLz" price="399" className="pull-right" />
            </SectionTitle>
            <FullColumn className="lead">
                The book, the resources, the 1-on-team coaching
            </FullColumn>
        </Row>
        <FeatureRow left="book" right="big_consulting" />
        <FeatureRow left="environment" right="projects" />
        <FeatureRow left="screencast" right="team_license" />
    </div>
);

export const Engineer = () => (
    <div>
        <Row className="padding-medium-bottom">
            <SectionTitle nomargin md={12} mdOffset={0}>
                Engineer package

                <BigBuyButton id="actX" price="79" className="pull-right" />
            </SectionTitle>
            <FullColumn className="lead">
                The book, the resources, the 30min coaching
            </FullColumn>
        </Row>
        <FeatureRow left="book" right="small_consulting" />
        <FeatureRow left="environment" right="projects" />
        <FeatureRow left="screencast" />
    </div>
);

export const Student = () => (
    <div>
        <Col md={4}>
        <Image src="img/ap-medium.png" alt="React+d3js ES6" thumbnail className="margin-big-top" />
        </Col>
        <Col md={8}>
        <h2 className="margin-bottom-none" nomargin>
            Student
            <BigBuyButton id="ZDTh" price="19" className="pull-right" />
        </h2>
        <p className="lead">The budget option</p>
        <p>
	    Creating visualizations with React and d3.js is an amazing experience that will make your life easier. That's why I want you to learn this material even if you're on a budget.
	</p>
	<p>
	    You'll get React+d3js ES6, a configured work environment, and 7 sample projects.
	</p>
        </Col>
    </div>
);


export const BigBuyButton = ({ id, price, className }) => (
    <a className={classNames(className, 'btn btn-success btn-lg btn-xl btn-buy text-uppercase')}
       href={`https://gumroad.com/l/${id}?wanted=true`}>
        <span className="text-white-dark">Buy now for</span> ${price}
    </a>
);

const Features = {
    book: {
        img: 'img/ap-medium.png',
        title: 'React+d3js ES6',
        description: '63 pages of code samples and explanation in PDF, ePUB, or MOBI. A solid guide to building your first data visualization with React and d3.js.'
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
        description: 'A tested work environment with Grunt, Bower, and Browserify ready to go. Get started immediately.'
    },
    projects: {
        img: 'img/working-project.png',
        title: '7 sample projects',
        description: 'Git repositories with working projects built with React and d3js'
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
        <h2 className="text-center">Choose a package</h2>
        <Col md={12}>
        <ul className="pricing-table list-unstyled panel row">
            <TablePackage name="student" price="19" id="ZDTh" className="first" />
            <TablePackage name="engineer" price="79" id="actX" />
            <TablePackage name="business" price="399" id="nXLz" className="active" />
        </ul>
        </Col>
    </div>
);

const FeatureList = {
    student: ['React+d3.js [PDF/epub/mobi]',
              'D3 Tips and Tricks by Malcolm Maclean',
              'Free updates',
              '45 day money-back guarantee'],
    engineer: [],
    business: []
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



export const BuyButton = ({ id, price, className }) => (
    <a className={classNames(className, 'btn btn-default btn-lg btn-block btn-buy')}
       href={`https://gumroad.com/l/${id}?wanted=true`}>
        <span className="text-uppercase">
            <span className="text-muted">Buy now for</span> ${price}
        </span>
    </a>
);
