
import React, { Component } from 'react';
import classNames from 'classnames';
import { Row } from 'react-bootstrap';

class Section extends Component {
    render() {
        return (
            <div className={classNames(this.props.className, 'container')}>
                <Row className="margin-big-top">
                    {this.props.children}
                </Row>
            </div>
        );
    }
};

export class LowSection extends Component {
    render() {
        return (
            <div className={classNames(this.props.className, 'container')}>
                <Row className="margin-small-top">
                    {this.props.children}
                </Row>
            </div>
        );
    }
}

export class FluffySection extends Section {
    render() {
        return (
            <Section className="container-pattern padding-big-bottom">
                {this.props.children}
            </Section>
        )
    }
};

export class DarkSection extends Section {
    render() {
        return (
            <div className="bg-white-dark padding-big-bottom">
	        <div className="container">
	            <Row>
                        {this.props.children}
                    </Row>
                </div>
            </div>
        )
    }
};

export class SectionTitle extends Component {
    render() {
        return (
            <h2 className={classNames(this.props.className, 'col-md-10 col-md-offset-1')}>
                {this.props.children}
            </h2>
        )
    };
}

export class Panel extends Component {
    render() {
        return (
            <div className={classNames(this.props.className, 'panel panel-default padding-medium-top padding-medium-bottom')}>
                <div className="panel-body text-center">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Section;
