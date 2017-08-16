
import React from 'react';
import { Image } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';

const Logos = [
    {
        img: require('./img/publications/business_insider.png'),
        title: "Business Insider"
    },
    {
        img: require('./img/publications/lifehacker.png'),
        title: "LifeHacker"
    },
    {
        img: require('./img/publications/bbc_radio.png'),
        title: "BBC Radio"
    },
    {
        img: require('./img/publications/pragpub.png'),
        title: "PragPub"
    },
    {
        img: require('./img/publications/logo-huffington-post.png'),
        title: "Huffington Post"
    },
    {
        img: require('./img/publications/javascript_weekly.png'),
        title: "JavaScript Weekly"
    },
    {
        img: require('./img/publications/dzone.png'),
        title: "DZone"
    },
    {
        img: require('./img/publications/magpi.png'),
        title: "MagPi magazine"
    },
    {
        img: require('./img/publications/sitepoint.png'),
        title: "SitePoint"
    },
    {
        img: require('./img/publications/forwardjs.png'),
        title: "Forward JS"
    },
    {
        img: require('./img/publications/html5devconf-logo.svg'),
        title: "HTML5 DevConf"
    },
    {
        img: require('./img/publications/webcamp_zg.png'),
        title: "WebCamp Zagreb"
    },
    {
        img: require('./img/publications/webcamp_lj.svg'),
        title: "WebCamp Ljubljana"
    },
    {
        img: require('./img/publications/ponyfoo.png'),
        title: "Pony Foo Weekly"
    }
];

const Featured = () => (
    <div>
        {Logos.map(({ img, title }) => <Image src={img} title={title} style={{width: '110px', padding: '5px', maxHeight: '80px', filter: 'grayscale(100%)'}} />)}
    </div>
);


export default Featured;
