import React from 'react'

import Layout from '../components/layout'
import Hero from '../widgets/Hero'
import CopyLight from '../widgets/CopyLight'
import CopyLargeImageLeft from '../widgets/CopyLargeImageLeft'
import CopyLargeImageRight from '../widgets/CopyLargeImageRight'
import ReadChapter from '../widgets/ReadChapter'
import LeftImage from '../images/gatsby-icon.png'

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
          <ReadChapter />
        </div>
      }
    />

    <CopyLight />
  </Layout>
)

export default IndexPage
