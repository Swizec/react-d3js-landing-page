
import React, { Component } from 'react';
import classNames from 'classnames';
import { Row } from 'react-bootstrap';

class Section extends Component {
    render() {
        return (
            <div className={classNames(this.props.classname, 'container')}>
                <Row className="margin-big-top">
                    {this.props.children}
                </Row>
            </div>
        );
    }
};

export class FluffySection extends Section {
    render() {
        return (
            <Section className="container-pattern padding-big-bottom">
                {this.props.children}
            </Section>
        )
    }
}

export default Section;
