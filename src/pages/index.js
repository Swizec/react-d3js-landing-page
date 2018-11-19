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
import CTABlock from '../widgets/CTABlock'
import Banner from '../widgets/Banner'
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

import Mock1 from '../images/Mock1.png'
import Mock2 from '../images/Mock2.png'
import Mock3 from '../images/Mock3.png'
import Swizec from '../images/swizec.png'
import Test2 from '../images/Test2.jpg'
import Test3 from '../images/Test3.jpg'
import Test4 from '../images/Test4.jpg'
import Test5 from '../images/Test5.png'
import Test6 from '../images/Test6.jpg'
import Test8 from '../images/Test8.png'
import examp1 from '../images/examp1.gif'
import examp2 from '../images/examp2.gif'
import examp3 from '../images/examp3.gif'
import examp4 from '../images/examp4.gif'
import examp5 from '../images/examp5.gif'
import examp6 from '../images/examp6.gif'
import examp7 from '../images/examp7.gif'
import examp8 from '../images/examp8.gif'
import Sample2 from '../images/sample2.gif'
import Sample3 from '../images/sample3.gif'

export default () => (
  <Layout>
    <Banner />
    <Hero
      topsub="A NEW BOOK COMING FALL 2018"
      header="STUCK COPY PASTING RANDOM D3 EXAMPLES?"
      subtitle="Become a data visualization engineer with React + D3v4."
      emailtext="Leave your email and get a free sample of React+d3.js and a mini email course. They will teach you about the basic architecture of React apps and show you how JSX makes your code better."
      input={<EmailForm />}
      submit={<EmailSubmit />}
      pic={<img src={Mock1} alt="pic" />}
    />
    <CopyLargeImageRight image={Mock3} copy={<CopyLargeImageRightText />} />

    <CopyLargeImageLeft
      header="LEARNING A NEW CODING PARADIGM IS HARD"
      image={Mock2}
      copy={<CopyLargeImageLeftText />}
      testimonial={
        <Testimonial
          image={Test3}
          quote="I'm starting a new position where I will focus on data visualization using React and d3. I got everything I needed from the book, your examples were straight forward and easy to follow. Thanks!"
          name="Aristides Staffieri"
          company={'Engineer at ProtectWise'}
        />
      }
    />

    <CopyLight
      header="BECOME A DATA VISUALIZATION ENGINEER WITH REACT+D3V4"
      copy={<CopyLightText />}
      testimonial={
        <TestimonialDark
          image={Test5}
          quote="The examples in V4 are off the hook. No wonder its been so much work, you have really extended the learning process into fun, interactive projects. I was specifically trying to learn topojson an map visualizations! What a breeze!"
          name="Julio Gudiño"
          company={'Frontend Developer'}
        />
      }
    />
    <CTABlock />
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
    <ReadChapter
      header="Ready to get started?"
      link={
        <a href="#Signup">
          Try the free chapter.
          <span role="img" aria-label="so cool">
            👇
          </span>
        </a>
      }
    />
    <TestimonialDark
      image={Test6}
      quote="I love having practical examples to help me learn new things faster. D3's docs alone are okay but marrying them with React (as a react newbie) is not as straightforward as someone handholding you through the process. And, since I don't have hours after work or on weekends to hack on things like I used to before I was married (or had kids), I need to optimize my learning."
      name="Paulo Elias"
      company={'Self Taught Developer'}
    />
    <ChapterList
      title="WHAT'S IN THE BOOK"
      subtitle="Table of contents"
      chapters={<ChaptersText />}
    />
    <ReadChapter
      header="Ready to get started?"
      link={
        <a href="#Signup">
          Try the free chapter.
          <span role="img" aria-label="so cool">
            👇
          </span>
        </a>
      }
    />
    <TestimonialDark
      image={Test8}
      quote="A sharply written work that delivers technical information in a conversational and easy to digest manner."
      name="Malcolm Maclean"
      company={'Author of D3 Tips & Tricks'}
    />
    <div id="Signup">
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
            image={Test2}
            quote="Great read with solid foundations to get you started crawling with react and up to a sprint!"
            name="MΛHDI"
            company={'Creator of Gyroscope'}
          />
        }
      />
    </div>
    <CopyLight
      header="REUSABLE DATA VISUALIZATION WITH REACT AND D3.JS"
      subtitle="Watch my talks from HTML5DevConf and the Bay Area D3 Meetup"
      copy={<VideoBlockContent />}
    />
    <CopyDark
      header="7 FULL HD SCREENCASTS"
      subtitle="Watching code appear before your eyes makes it easier to understand."
      image={<img src={Sample2} alt="samp2" />}
      copy={<Examples1 />}
    />
    <CopyDark
      header="A COURSE WITH INTERACTIVE CODE SAMPLES"
      subtitle="Learn React and D3v4 with executable code samples right in your browser"
      image={<img src={Sample3} alt="samp3" />}
      copy={<Examples2 />}
      testimonial={
        <Testimonial
          image={Test4}
          quote="Teller proves in his 'React+d3' book that React is not 'just the view', but a powerful tool to create declarative abstractions on top of low level visualization libraries like d3."
          name="Michel Weststrate"
          company={'Creator of MobX'}
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
    <div id="Packages">
      <PackageLight
        header="BOOK + COURSE + COACHING"
        subtitle="The book, the interactive course, 1 week of personal coaching"
        copy={<PackageFeatures />}
        button={<CTAButton link={<button>Buy Now For $399</button>} />}
      />
    </div>
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
