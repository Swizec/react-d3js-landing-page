
import React from 'react';
import classNames from 'classnames';

import { Row, Col, Image, ButtonInput, Button } from 'react-bootstrap';

import Section, { SectionTitle, Panel } from './Section';
import { HalfColumn, FullColumn } from './Columns';

export const Complete = () => (
    <div>
        <Row className="padding-medium-bottom">
            <SectionTitle nomargin md={12} mdOffset={0}>
                The complete package

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
