
import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap';
import Section, { LowSection, FluffySection, DarkSection, SectionTitle, GreenSection } from './Section';
import { LeftColumn, WideLeftColumn, RightColumn, NarrowRightColumn } from './Columns';
import Testimonial, { TestimonialsCarousel } from './Testimonials';

import * as Content from './Content';
import * as Packages from './Packages';

const App = () => (
    <div>
        <div className="bg-white-dark padding-small-top"></div>
        <Content.Header />
        <Content.BookIntro className="margin-big-bottom" />
        <hr />
        <LowSection className="margin-medium-bottom">
            <TestimonialsCarousel keynames={['michel', 'ulterior', 'myusef', 'patrick',
                                             'd3noob', 'aristides',
                                             'thomas_buhr', 'thomas_fee']} />
        </LowSection>
        <GreenSection nocontainer>
            <Row>
                <SectionTitle>Live Examples Gallery</SectionTitle>
            </Row>
            <Content.Examples />
        </GreenSection>
        <DarkSection>
            <Row>
                <Content.Why />
            </Row>
            <Row>
                <Testimonial which="patrick" />
            </Row>
        </DarkSection>
        <Section>
            <Content.What />
            <Testimonial which="michel" />
        </Section>
        <DarkSection>
            <Content.FreeSample />
            <Testimonial which="ulterior" />
        </DarkSection>
        <Section>
            <Content.Screencast />
            <Testimonial which="myusef" />
        </Section>
        <DarkSection>
            <Content.Author />
        </DarkSection>
        <FluffySection>
            <Packages.Business />
        </FluffySection>
        <DarkSection>
            <Packages.Engineer />
            <Testimonial which="aristides" />
        </DarkSection>
        <LowSection className="margin-medium-bottom">
            <Packages.Student />
        </LowSection>
        <DarkSection className="padding-big-top">
            <Content.Questions />
        </DarkSection>
        <Section>
            <Content.FAQ />
        </Section>
        <DarkSection>
            <Packages.Picker />
            <TestimonialsCarousel keynames={['michel', 'patrick', 'ulterior',
                                             'myusef', 'd3noob', 'aristides',
                                             'thomas_buhr', 'thomas_fee']} />
        </DarkSection>
    </div>
);

export default App;
