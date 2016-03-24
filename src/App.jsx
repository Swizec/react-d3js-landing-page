
import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap';
import Section, { LowSection, FluffySection, DarkSection, SectionTitle } from './Section';
import { LeftColumn, WideLeftColumn, RightColumn, NarrowRightColumn } from './Columns';
import Testimonial, { TestimonialsCarousel } from './Testimonials';

import { Header, BookIntro, Why, What, FreeSample } from './Content';

const App = () => (
    <div>
        <div className="bg-white-dark padding-small-top"></div>
        <Header />
        <BookIntro className="margin-big-bottom" />
        <hr />
        <LowSection className="margin-medium-bottom">
            <TestimonialsCarousel keynames={['d3noob', 'aristides',
                                             'thomas_buhr', 'thomas_fee']} />
        </LowSection>
        <DarkSection>
            <Why />
        </DarkSection>
        <Section>
            <What />
        </Section>
        <DarkSection>
            <FreeSample />
        </DarkSection>
    </div>
);

export default App;
