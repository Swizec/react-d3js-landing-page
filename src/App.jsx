
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
        <LowSection>
            <TestimonialsCarousel keynames={['bjorg1', 'michel', 'ulterior', 'myusef',
                                             'patrick', 'bjorg2',
                                             'd3noob', 'aristides',
                                             'thomas_buhr', 'thomas_fee']} />
        </LowSection>
        <Content.BookIntro className="margin-big-bottom" />
        <GreenSection nocontainer>
            <div className="container">
                <Row>
                    <a name="examples-gallery"></a>
                    <SectionTitle>Live Examples Gallery</SectionTitle>
                </Row>
            </div>
            <Content.Examples />
            <div className="container">
                <Content.SampleLink />
            </div>
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
            <TestimonialsCarousel keynames={['bjorg1', 'michel', 'patrick', 'ulterior',
                                             'myusef', 'bjorg2', 'd3noob', 'aristides',
                                             'thomas_buhr', 'thomas_fee']} />
        </DarkSection>
    </div>
);

export default App;
