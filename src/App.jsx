
import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap';
import Section, { LowSection, FluffySection, DarkSection, SectionTitle } from './Section';
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
            <TestimonialsCarousel keynames={['d3noob', 'aristides',
                                             'thomas_buhr', 'thomas_fee']} />
        </LowSection>
        <DarkSection>
            <Content.Why />
        </DarkSection>
        <Section>
            <Content.What />
        </Section>
        <DarkSection>
            <Content.FreeSample />
        </DarkSection>
        <Section>
            <Content.Screencast />
        </Section>
        <DarkSection>
            <Content.Author />
        </DarkSection>
        <FluffySection>
            <Packages.Business />
        </FluffySection>
        <DarkSection>
            <Packages.Engineer />
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
        </DarkSection>
    </div>
);

export default App;
