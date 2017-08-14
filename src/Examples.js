
import React from 'react';
import { Row, Thumbnail } from 'react-bootstrap';
import { LeftColumn, RightColumn, WideLeftColumn, NarrowRightColumn, MiddleColumn } from './Columns';
import LazyLoad from 'react-lazy-load';

import { openDripForm } from './helpers';

const Examples = {
    'choropleth-map': {
        src: require('./img/examples/choropleth-map.gif'),
        title: "React D3 interactive choropleth map",
        description: (
            <p>
                <b>An interactive choropleth map</b> shows you how to work with topographical data, draw maps, and census regions. We implement zooming and map exploration.
            </p>
        )
    },
    'histogram': {
        src: require('./img/examples/histogram.gif'),
        title: "React D3 interactive histogram",
        description: (
            <p>
                <b>An interactive histogram</b> teaches you some of D3's statistical functions, and the basics of drawing charts. Drawing shapes, adding axes, parsing data ...
            </p>
        )
    },
    'dashboard': {
        src: require('./img/examples/dashboard.gif'),
        title: "React D3 dashboard",
        description: (
            <p>
                Together they form an <b>interactive dashboard</b> where multiple charts share data, react to common controls, and act together to give users a full picture.
            </p>
        )
    },
    'rainbow-snake': {
        src: require('./img/examples/rainbow-snake.gif'),
        title: "React D3 transitions animation",
        description: (
            <p>
                <b>A rainbow snake</b> teaches you about building transition-based animation. We place 50 circles on the screen and perform transitions when our user touches them with their mouse.
            </p>
        )
    },
    'alphabet': {
        src: require('./img/examples/alphabet_2.gif'),
        title: "React D3 enter/update/exit transitions",
        description: (
            <p>
                <b>An animated alphabet</b> teaches you about creating enter/update/exit transitions. Animate elements coming in and out of your data visualization.
            </p>
        )
    },
    'particles': {
        src: require('./img/examples/particles.gif'),
        title: "React D3 particle generator",
        description: (
            <p>
                <b>A particle generator</b> teaches you the basics of using <b>Redux</b> for state management, pushing your browser to the limits, and animating tens of thousands of elements.
            </p>
        )
    },
    'bouncing-marbles': {
        src: require('./img/examples/bouncing-marbles-1.gif'),
        title: "React declarative canvas animation",
        description: (
            <p>
                <b>An interactive billiards game</b> teaches you about rendering graphical React components onto HTML5 canvas, making them interactive, and using <b>MobX</b> for state handling.
            </p>
        )
    },
    'dancing-tree': {
        src: require('./img/examples/dancing-tree.gif'),
        title: "Dancing tree fractal in React",
        description: (
            <p>
                <b>A dancing pythagorean tree fractal</b> teaches you about component recursion. We use it to compare differences between React, <b>Preact</b>, and <b>Inferno</b>.
            </p>
        )
    }
}

const LeftExample = ({ which }) => {
    const { src, title, description } = Examples[which];

    return (
        <Row className="margin-small-bottom">
            <LeftColumn>
                <a href="" onClick={openDripForm}>
                    <LazyLoad verticalOffset={500} width={360}>
                        <Thumbnail src={src} title={title}  />
                    </LazyLoad>
                </a>
            </LeftColumn>
            <RightColumn>
                {description}
            </RightColumn>
        </Row>

    );
}

const RightExample = ({ which }) => {
    const { src, title, description } = Examples[which];

    return (
        <Row className="margin-small-bottom">
            <WideLeftColumn>
                {description}
            </WideLeftColumn>
            <NarrowRightColumn>
                <a href="" onClick={openDripForm}>
                    <LazyLoad verticalOffset={200} width={360}>
                        <Thumbnail src={src} title={title} />
                    </LazyLoad>
                </a>
            </NarrowRightColumn>
        </Row>

    );
}

const CenterExample = ({ which }) => {
    const { src, title, description } = Examples[which];

    return (
        <Row className="margin-small-bottom">
            <MiddleColumn>
                {description}
                <a href="" onClick={openDripForm}>
                    <LazyLoad verticalOffset={200} width={360}>
                        <Thumbnail src={src} title={title} />
                    </LazyLoad>
                </a>
            </MiddleColumn>
        </Row>

    );
}


const Example = ({ left, right, which }) => (
    left ? <LeftExample which={which} /> : right ? <RightExample which={which} /> : <CenterExample which={which} />
)

export default Example;
