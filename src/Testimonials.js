
import React from 'react';
import { Image, Carousel, CarouselItem } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';

const TestimonialData = {
    d3noob: {
        img: require('./img/avatars/d3noob.png'),
        quote: "A sharply written work that delivers technical information in a conversational and easy to digest manner.",
        who: 'Malcolm Maclean, Author of D3 Tips & Tricks'
    },
    aristides: {
        img: require('./img/avatars/aristides.jpg'),
        quote: "I'm starting a new position where I will focus on data visualization using React and d3. I got everything I needed from the book, your examples were straight forward and easy to follow. Thanks!",
        who: "Aristides Staffieri, Engineer at ProtectWise"
    },
    thomas_buhr: {
        img: require('./img/avatars/thomas-buhr.jpg'),
        quote: "An excellent study in how state vs props work and are used",
        who: "Thomas J. Buhr, founder of Virtuoso"
    },
    thomas_fee: {
        img: require('./img/avatars/thomas-fee.jpg'),
        quote: "I was not expecting a detailed setup description using npm -g, grunt, and bower. I was very pleased with that. :)",
        who: "Thomas Fee, Senior Software Engineer at Interactive Data"
    },
    michel: {
        img: require('./img/avatars/michel.jpg'),
        quote: "Teller proves in his 'React+d3' book that React is not 'just the view', but a powerful tool to create declarative abstractions on top of low level visualization libraries like d3.",
        who: 'Michel Weststrate, creator of MobX'
    },
    myusef: {
        img: require('./img/avatars/4DWQ9dz2.jpg'),
        quote: "Great read with solid foundations to get you started crawling with react  and up to a sprint!",
        who: 'MΛHDI, creator of Gyroscope'
    },
    patrick: {
        img: require('./img/avatars/davidson.jpg'),
        quote: "You just blew my mind! This is going to save me so much time.",
        who: 'Patrick Davidson, Developer at Phytozome Group, JGI, Lawrence Berkeley Lab'
    },
    ulterior: {
        img: require('./img/avatars/9WOxpg5t.jpg'),
        quote: '@Swizec going through the free chapter of your book, well written, approachable and a joy to read! Looking forward to the complete edition.',
        who: 'Ulterior, @boleroo'
    },
    bjorg1: {
        img: require('./img/avatars/BR.jpg'),
        quote: "The 'A good work environment' section is just pure gold. Way too many times I've read an article or seen instructional videos describing a good environment, followed by '... but we shall not be doing this in here.' Good job on walking the walk.",
        who: 'Bjorgvin Reynisson'
    },
    bjorg2: {
        img: require('./img/avatars/BR.jpg'),
        quote: "Finally, this is just a very good read. There's a nice tone to it. The explainations are good, and I like it when you point out where there are alternative solutions you have not tried yet. I also do like the lenght of the book. Excellent job.",
        who: 'Bjorgvin Reynisson'
    },
    julio: {
        img: require('./img/avatars/julio.png'),
        quote: "The examples in V4 are off the hook. No wonder its been so much work, you have really extended the learning process into fun, interactive projects. I was specifically trying to learn topojson an map visualizations! What a breeze!",
        who: "Julio Gudiño"
    },
    paulo: {
        img: require('./img/avatars/paulo.jpg'),
        quote: "I love having practical examples to help me learn new things faster. D3's docs alone are okay but marrying them with React (as a react newbie) is not as straightforward as someone handholding you through the process. And, since I don't have hours after work or on weekends to hack on things like I used to before I was married (or had kids), I need to optimize my learning.",
        who: "Paulo Elias"
    },
    cyrus: {
        img: require('./img/avatars/cyrus.jpg'),
        quote: "This is by far the best video I have watched. More like this!﻿",
        who: "Cyrus Zei"
    }
};

const Testimonial = ({ which }) => {
    let {img, quote, who} = TestimonialData[which];

    return (
        <div style={{height: '150px'}} itemProp="review" itemScope itemType="http://schema.org/Review">
            <figure className="col-xs-2 col-md-1 col-md-offset-1 margin-small-top">
                <LazyLoad verticalOffset={500} height={110}>
                    <Image circle src={img} alt={who}
                           style={{height: '110px'}} />
                </LazyLoad>
            </figure>
            <blockquote className="col-xs-9 col-xs-offset-1 col-md-7"
                        style={{marginLeft: '25px'}}>
	        <p itemProp="reviewBody">{quote}</p>
	        <small itemProp="author" itemScope itemType="http://schema.org/Person"><span itemProp="name">{who}</span></small>
            </blockquote>
        </div>
    );
}

const CarouselTestimonial = (k) => (
    <CarouselItem key={k}>
        <Testimonial which={k} />
    </CarouselItem>
);

export const TestimonialsCarousel = ({ keynames, className }) => (
    <Carousel className="row testimonial-carousel">
        {keynames.map(CarouselTestimonial)}
    </Carousel>
);


export default Testimonial;
