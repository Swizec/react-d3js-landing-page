
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Row } from 'react-bootstrap';
import Section, { LowSection, FluffySection, DarkSection, GreenSection } from './Section';
import Testimonial, { TestimonialsCarousel } from './Testimonials';

import * as Content from './Content';
import * as Packages from './Packages';

import './App.css';
import './bootstrap/css/bootstrap.min.css';
import './font-awesome/css/font-awesome.min.css';
import './css/bootstrap-override.css';
import './css/bootstrap-custom-utils.css';
import './css/salesbury-lilac.css';

const OfferMapping = new Map([
//    ['yay-visa', .5]
]);

class App extends Component {
    static contextTypes = {
        offer: PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.number
        })
    };
    static childContextTypes = {
        offer: PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.number
        })
    };

    getChildContext() {
        let query = window.location.search.replace(/^\?/, ''),
            offer = require('querystring').parse(query)['offer'],
            exists = OfferMapping.has(offer);

        return {offer: {name: exists ? offer : '',
                        value: exists ? OfferMapping.get(offer) : 1}};
    }

    render() {
        return (
            <div>
                <div className="bg-white-dark padding-small-top"></div>
                <Content.Header />
                <LowSection>
                    <Testimonial which="patrick" />
                </LowSection>
                <Content.BookIntro className="margin-big-bottom" />
                <DarkSection>
                    <Row>
                        <Content.Why />
                    </Row>
                    <Row>
                        <Testimonial which="aristides" />
                    </Row>
                </DarkSection>
                <Section>
                    <Content.WhatExplain />
                    <Testimonial which="julio" />
                    <Content.WhatExamples />
                    <Content.SampleLink jump />
                    <Testimonial which="paulo" />
                    <Content.Index />
                    <Content.SampleLink />
                    <TestimonialsCarousel keynames={['bjorg1', 'bjorg2']} />
                </Section>
                <DarkSection>
                    <Content.FreeSample />
                    <Testimonial which="ulterior" />
                </DarkSection>
                <GreenSection>
                    <Content.Talk />
                    <Content.SampleLink />
                    <Testimonial which="bjorg2" />
                </GreenSection>
                <Section>
                    <Content.Screencast />
                    <Content.SampleLink jump />
                    <Testimonial which="cyrus" />
                    <Content.Course />
                    <Content.SampleLink jump />
                </Section>
                <DarkSection>
                    <Content.Author />
                </DarkSection>
                <FluffySection>
                    <Packages.Everything />
                </FluffySection>
                <DarkSection>
                    <Packages.BookCourse />
                </DarkSection>
                <FluffySection className="margin-medium-bottom">
                    <Packages.Book />
                </FluffySection>
                <DarkSection className="padding-big-top">
                    <Content.Questions />
                </DarkSection>
                <Section>
                    <Content.FAQ />
                </Section>
                <DarkSection>
                    <Packages.Picker />
                    <Content.Subscription />
                    <TestimonialsCarousel keynames={['julio', 'paulo', 'bjorg1', 'michel',
                                                     'patrick',
                                                     'ulterior', 'myusef', 'bjorg2',
                                                     'd3noob', 'aristides', 'thomas_buhr',
                                                     'thomas_fee']} />
                </DarkSection>
            </div>
        );
    }
}

export default App;
