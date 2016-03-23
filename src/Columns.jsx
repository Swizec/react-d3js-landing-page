
import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

export class LeftColumn extends Component {
    render() {
        return (
            <Col xs={12} md={4} mdOffset={1}>
            {this.props.children}
            </Col>
        );
    }
}

export class RightColumn extends Component {
    render() {
        return (
            <Col xs={12} md={6}>
            {this.props.children}
            </Col>
        );
    }
}
