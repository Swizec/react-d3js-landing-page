
import React from 'react';

import { Image } from 'react-bootstrap';

const TestimonialData = {
    d3noob: {
        img: 'img/d3noob.png',
        quote: "A sharply written work that delivers technical information in a conversational and easy to digest manner.",
        who: 'Malcolm Maclean, Author of D3 Tips & Tricks'
    },
    aristides: {
        img: 'img/aristides.jpg',
        quote: "I'm starting a new position where I will focus on data visualization using React and d3. I got everything I needed from the book, your examples were straight forward and easy to follow. Thanks!",
        who: "Aristides Staffieri, Engineer at ProtectWise"
    }
};

const Testimonial = ({ which }) => {
    let {img, quote, who} = TestimonialData[which];

    return (
        <div>
            <figure className="col-md-2 col-md-offset-1 margin-small-top">
                <Image circle src={img} alt={who}
                       style={{height: '110px'}}
                       className="pull-right" />
            </figure>
            <blockquote className="col-md-7">
	        <p>{quote}</p>
	        <small>{who}</small>
            </blockquote>
        </div>
    );
}

export default Testimonial;
