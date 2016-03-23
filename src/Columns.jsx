
import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

export class LeftColumn extends Component {
    render() {
        let md = this.props.md || 4;

        return (
            <Col xs={12} md={md} mdOffset={1} className={this.props.className}>
            {this.props.children}
            </Col>
        );
    }
}

export class WideLeftColumn extends Component {
    render() {
        return (
            <LeftColumn md={6} className={this.props.className}>
                {this.props.children}
            </LeftColumn>
        )
    }
}

export class RightColumn extends Component {
    render() {
        let md = this.props.md || 4;

        return (
            <Col xs={12} md={md} className={this.props.className}>
            {this.props.children}
            </Col>
        );
    }
}

export class NarrowRightColumn extends Component {
    render() {
        return (
            <RightColumn md={4} className={this.props.className}>
                {this.props.children}
            </RightColumn>
        );
    }
}

export class SingleColumn extends Component {
    render() {
        return (
            null
        );
    }
}
