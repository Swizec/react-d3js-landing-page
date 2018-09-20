import React from 'react'
import Layout from '../components/layout'
import Hero from '../widgets/Hero'
import CopyLight from '../widgets/CopyLight'
import CopyDark from '../widgets/CopyDark'
import CopyLargeImageLeft from '../widgets/CopyLargeImageLeft'
import CopyLargeImageRight from '../widgets/CopyLargeImageRight'
import Testimonial from '../widgets/Testimonial'
import TestimonialDark from '../widgets/TestimonialDark'
import CopySmallImageLeft from '../widgets/CopySmallImageLeft'
import CopySmallImageRight from '../widgets/CopySmallImageRight'
import CopyLargeImageRightText from '../../content/CopyLargeImageRightText.mdx'
import CopyLargeImageLeftText from '../../content/CopyLargeImageLeftText.mdx'
import CopyLightText from '../../content/CopyLightText'
import ReadChapter from '../widgets/ReadChapter.js'
import ChapterList from '../widgets/ChapterList.js'
import EmailSignup from '../widgets/EmailSignup.js'
import VideoBlock from '../widgets/VideoBlock.js'
import TestimonialCarousel from '../widgets/TestimonialCarousel.js'
import AboutAuthor from '../widgets/AboutAuthor.js'
import PackageLight from '../widgets/PackageLight.js'
import PackageDark from '../widgets/PackageDark.js'
import PackageFeatures from '../widgets/PackageFeatures.js'
import PackageFeatures2 from '../widgets/PackageFeatures2.js'
import PackageFeatures3 from '../widgets/PackageFeatures3.js'
import CTAButton from '../widgets/CTAButton.js'
import ContactBar from '../widgets/ContactBar.js'
import Pricing from '../widgets/Pricing.js'
import FAQText from '../../content/FAQText'
import ChaptersText from '../../content/ChaptersText'
import EmailForm from '../../content/EmailForm'
import EmailSubmit from '../../content/EmailSubmit'
import EmailHeaderText from '../../content/EmailHeaderText'
import PriceBlock from '../../content/PriceBlock'
import ContactBarText from '../../content/ContactBarText'
import VideoBlockContent from '../../content/VideoBlockContent'
import Examples1 from '../../content/Examples1'
import Examples2 from '../../content/Examples2'
import AboutAuthorText from '../../content/AboutAuthorText.mdx'

import LeftImage from '../images/gatsby-icon.png'
import Swizec from '../images/swizec.png'
import Test1 from '../images/Test1.jpg'
import examp1 from '../images/examp1.gif'
import examp2 from '../images/examp2.gif'
import examp3 from '../images/examp3.gif'
import examp4 from '../images/examp4.gif'
import examp5 from '../images/examp5.gif'
import examp6 from '../images/examp6.gif'
import examp7 from '../images/examp7.gif'
import examp8 from '../images/examp8.gif'

export default () => (
  <Layout>
    <Hero />
    <CopyLargeImageRight image={LeftImage} copy={<CopyLargeImageRightText />} />
    <CopyLargeImageLeft
      header="LEARNING A NEW CODING PARADIGM IS HARD"
      image={LeftImage}
      copy={<CopyLargeImageLeftText />}
      testimonial={
        <Testimonial
          image={Test1}
          quote="You just blew my mind! This is going to save me so much time."
          name="Johnathan Doe"
          company={'Founder and CEO of ' + 'Company Inc'}
        />
      }
    />
    <CopyLight
      header="BECOME A DATA VISUALIZATION ENGINEER WITH REACT+D3V4"
      copy={<CopyLightText />}
      testimonial={
        <TestimonialDark
          image={Test1}
          quote="You just blew my mind! This is going to save me so much time."
          name="Johnathan Doe"
          company={'Founder and CEO of ' + 'Company Inc'}
        />
      }
    />
    <CopyLight header="REACT+D3V4 GIVES YOU PRACTICAL EXAMPLES 👇" />
    <CopySmallImageLeft
      image={examp1}
      copy={
        <div>
          <h4>An interactive choropleth map</h4>
          <p>
            shows you how to work with topographical data, draw maps, and census
            regions. We implement zooming and map exploration.
          </p>
        </div>
      }
    />
    <CopySmallImageRight
      image={examp2}
      copy={
        <div>
          <h4>An interactive histogram</h4>
          <p>
            teaches you some of D3's statistical functions, and the basics of
            drawing charts. Drawing shapes, adding axes, parsing data ...
          </p>
        </div>
      }
    />
    <CopySmallImageLeft
      image={examp3}
      copy={
        <div>
          <h4>Interactive dashboard </h4>
          <p>
            Together they form an interactive dashboard where multiple charts
            share data, react to common controls, and act together to give users
            a full picture.
          </p>
        </div>
      }
    />
    <CopySmallImageRight
      image={examp4}
      copy={
        <div>
          <h4>A rainbow snake</h4>
          <p>
            A rainbow snake teaches you about building transition-based
            animation. We place 50 circles on the screen and perform transitions
            when our user touches them with their mouse.
          </p>
        </div>
      }
    />
    <CopySmallImageLeft
      image={examp5}
      copy={
        <div>
          <h4>An animated alphabet</h4>
          <p>
            An animated alphabet teaches you about creating enter/update/exit
            transitions. Animate elements coming in and out of your data
            visualization.
          </p>
        </div>
      }
    />
    <CopySmallImageRight
      image={examp6}
      copy={
        <div>
          <h4>A particle generator</h4>
          <p>
            A particle generator teaches you the basics of using Redux for state
            management, pushing your browser to the limits, and animating tens
            of thousands of elements.
          </p>
        </div>
      }
    />
    <CopySmallImageLeft
      image={examp7}
      copy={
        <div>
          <h4>An interactive billiards game</h4>
          <p>
            An interactive billiards game teaches you about rendering graphical
            React components onto HTML5 canvas, making them interactive, and
            using MobX for state handling.
          </p>
        </div>
      }
    />
    <CopySmallImageRight
      image={examp8}
      copy={
        <div>
          <h4>A dancing pythagorean tree fractal</h4>
          <p>
            A dancing pythagorean tree fractal teaches you about component
            recursion. We use it to compare differences between React, Preact,
            and Inferno.
          </p>
        </div>
      }
    />
    <ReadChapter />
    <TestimonialDark
      image={Test1}
      quote="You just blew my mind! This is going to save me so much time."
      name="Johnathan Doe"
      company={'Founder and CEO of ' + 'Company Inc'}
    />
    <ChapterList
      title="WHAT'S IN THE BOOK"
      subtitle="Table of contents"
      chapters={<ChaptersText />}
    />
    <ReadChapter />
    <TestimonialCarousel />
    <CopyDark
      header="START WITH A FREE CHAPTER AND EMAIL CRASH COURSE"
      subtitle="See what React+D3v4 is like and learn the basics."
      copy={
        <EmailSignup
          header={<EmailHeaderText />}
          input={<EmailForm />}
          submit={<EmailSubmit />}
        />
      }
      testimonial={
        <Testimonial
          image={Test1}
          quote="You just blew my mind! This is going to save me so much time."
          name="Johnathan Doe"
          company={'Founder and CEO of ' + 'Company Inc'}
        />
      }
    />
    <CopyLight
      header="REUSABLE DATA VISUALIZATION WITH REACT AND D3.JS"
      subtitle="Watch my talks from HTML5DevConf and the Bay Area D3 Meetup"
      copy={<VideoBlockContent />}
    />
    <CopyDark
      header="7 FULL HD SCREENCASTS"
      subtitle="Watching code appear before your eyes makes it easier to understand."
      copy={<Examples1 />}
    />
    <CopyDark
      header="A COURSE WITH INTERACTIVE CODE SAMPLES"
      subtitle="Learn React and D3v4 with executable code samples right in your browser"
      copy={<Examples2 />}
      testimonial={
        <Testimonial
          image={Test1}
          quote="You just blew my mind! This is going to save me so much time."
          name="Johnathan Doe"
          company={'Founder and CEO of ' + 'Company Inc'}
        />
      }
    />
    <AboutAuthor
      header="ABOUT THE AUTHOR"
      image={Swizec}
      copy={<AboutAuthorText />}
    />
    <CopyDark
      copy={
        <VideoBlock
          video={
            <iframe
              frameborder="0"
              allowfullscreen="1"
              allow="autoplay; encrypted-media"
              title="YouTube video player"
              width="853"
              height="480"
              className="youtubevid"
              src="https://www.youtube.com/embed/4vTvXThQuXA?enablejsapi=1&amp;origin=https%3A%2F%2Fswizec.com&amp;widgetid=5"
              id="widget6"
            />
          }
        />
      }
    />
    <PackageLight
      header="BOOK + COURSE + COACHING"
      subtitle="The book, the interactive course, 1 week of personal coaching"
      copy={<PackageFeatures />}
      button={<CTAButton link={<button>Buy Now For $399</button>} />}
    />
    <PackageDark
      header="BOOK + COURSE"
      subtitle="The book and the interactive course"
      copy={<PackageFeatures2 />}
      button={<CTAButton link={<button>Buy Now For $149</button>} />}
    />
    <PackageLight
      header="JUST THE BOOK"
      subtitle="The Book and some resources"
      copy={<PackageFeatures3 />}
      button={<CTAButton link={<button>Buy Now For $49</button>} />}
    />
    <ContactBar header={<ContactBarText />} />
    <CopyLight
      header="FAQ?"
      subtitle="Do you have any questions? We’ve got answers"
      copy={<FAQText />}
    />
    <Pricing
      header="CHOOSE A PACKAGE"
      block={<PriceBlock />}
      copy={'Too expensive? Try for $5/month instead 👉'}
      testimonial={<TestimonialCarousel />}
    />
  </Layout>
)
