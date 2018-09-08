import React from 'react'

import Layout from '../components/layout'
import Hero from '../widgets/Hero'
import CopyLight from '../widgets/CopyLight'
import CopyLargeImageLeft from '../widgets/CopyLargeImageLeft'
import CopyLargeImageRight from '../widgets/CopyLargeImageRight'
import ReadChapter from '../widgets/ReadChapter'
import Testimonial from '../widgets/Testimonial'
import CopySmallImageLeft from '../widgets/CopySmallImageLeft'
import CopySmallImageRight from '../widgets/CopySmallImageRight'

import LeftImage from '../images/gatsby-icon.png'
import Test1 from '../images/Test1.jpg'

const IndexPage = () => (
  <Layout>
    <Hero />
    <CopyLargeImageRight
      image={LeftImage}
      copy={
        <div>
          <p>
            Creating dynamic and interactive data visualizations on the web is a
            pain in the ass. It gets really hard when you add animation,
            inter-connected dashboards, and fast performance on mobile devices.
          </p>
          <p>
            You're either using libraries you can't customize, copy pasting D3
            examples you don't understand, or battling documentation to write
            spaghetti code you can't reuse.
          </p>
          <p>It's okay, we've all been there.</p>
          <p>But it doesn't have to be that way.</p>
          <p>
            With React+D3v4 you'll learn the basics of building fast data
            visualization components in about an hour. Get started immediately
            without installing anything.
          </p>
          <p>Don't know React? React+D3v4 starts at the very beginning. </p>
          <p>Struggling with D3? Every function is explained.</p>
          <p>
            New to modern JavaScript syntax? React+D3v4 comes with an
            interactive ES6 cheatsheet.
          </p>
          <p>
            Get the confidence you need to excell.
            <span role="img" aria-label="so cool">
              💪
            </span>
          </p>
          <ReadChapter />
        </div>
      }
    />
    <CopyLargeImageLeft
      header="LEARNING A NEW CODING PARADIGM IS HARD"
      image={LeftImage}
      copy={
        <div>
          <p>
            Creating dynamic and interactive data visualizations on the web is a
            pain in the ass. It gets really hard when you add animation,
            inter-connected dashboards, and fast performance on mobile devices.
          </p>
          <p>
            You're either using libraries you can't customize, copy pasting D3
            examples you don't understand, or battling documentation to write
            spaghetti code you can't reuse.
          </p>
          <p>It's okay, we've all been there.</p>
          <p>But it doesn't have to be that way.</p>
          <p>
            With React+D3v4 you'll learn the basics of building fast data
            visualization components in about an hour. Get started immediately
            without installing anything.
          </p>
          <p>Don't know React? React+D3v4 starts at the very beginning. </p>
          <p>Struggling with D3? Every function is explained.</p>
          <p>
            New to modern JavaScript syntax? React+D3v4 comes with an
            interactive ES6 cheatsheet.
          </p>
          <p>
            Get the confidence you need to excell.
            <span role="img" aria-label="so cool">
              💪
            </span>
          </p>
        </div>
      }
    />
    <CopyLight
      header="BECOME A DATA VISUALIZATION ENGINEER WITH REACT+D3V4"
      copy={
        <div>
          <p>
            React+D3v4 gives you a quick overview of the basics to get you
            started, followed by a deep dive that solidifies your knowledge
            through varied projects and examples. Build working code that you
            can show off to your friends, boss, and coworkers.
          </p>
          <p>
            Learn the basics with interactive examples right in your browser —
            no need to install anything. Forget about Npm and Webpack and Babel
            and Node. Just React and D3.
          </p>
          <p>
            Dive into 7 projects that teach you how it all fits together. Build
            interactive visualizations, create animations, and build fast
            performance with canvas. Learn everything there is to know about
            building beautiful apps with React and D3.
          </p>
          <p>
            From the very basics of React and D3, to state handling with Redux
            and MobX, React alternatives like Preact and Inferno.
          </p>
        </div>
      }
    />

    <Testimonial
      image={Test1}
      quote="You just blew my mind! This is going to save me so much time."
      name="-- Patrick Davidson, Developer at Phytozome Group, JGI, Lawrence Berkeley Lab"
    />
    <CopySmallImageLeft />
    <CopySmallImageRight />
  </Layout>
)

export default IndexPage
