import React from 'react'
import styled from 'styled-components'

import CopySmallImageLeft from '../widgets/CopySmallImageLeft.js'
import F1 from '../images/F1.png'
import F2 from '../images/F2.png'
import F3 from '../images/F3.gif'
import F4 from '../images/F4.gif'

const Features = styled.div`
  font-family: 'Open Sans', Arial, sans-serif;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'F1 F2'
    'F3 F4';

  img {
    height: 150px;
    width: 150px;
    border-radius: 80px;
  }
  @media (max-width: 940px) {
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      'F1'
      'F2'
      'F3'
      'F4';

    align-items: center;
    justify-items: center;
    img {
      height: 100px;
    }
  }
`
const Feature1 = styled.div`
  grid-area: F1;
`
const Feature2 = styled.div`
  grid-area: F2;
`
const Feature3 = styled.div`
  grid-area: F3;
`
const Feature4 = styled.div`
  grid-area: F4;
`

const PackageFeatures3 = props => (
  <Features>
    <Feature1>
      <CopySmallImageLeft
        image={F1}
        copy={
          <div>
            <h4>REACT+D3V4</h4>
            <p>
              249 pages of code samples and explanation in PDF, ePUB, or MOBI. A
              solid guide to building your first data visualization with React
              and d3.js.
            </p>
          </div>
        }
      />
    </Feature1>
    <Feature2>
      <CopySmallImageLeft
        image={F2}
        copy={
          <div>
            <h4>1 WEEK OF COACHING</h4>
            <p>
              I will help you get started and review your code. Includes up to 1
              hour video chat and pair programming.
            </p>
          </div>
        }
      />
    </Feature2>
    <Feature3>
      <CopySmallImageLeft
        image={F3}
        copy={
          <div>
            <h4>INTERACTIVE COURSE</h4>
            <p>
              Learn React and D3v4 with executable code samples right in your
              browser
            </p>
          </div>
        }
      />
    </Feature3>
    <Feature4>
      <CopySmallImageLeft
        image={F4}
        copy={
          <div>
            <h4>7 FULL HD SCREENCASTS</h4>
            <p>
              Get 7 full HD screencasts from my live streaming sessions and
              recap videos. Watch code evolve before your eyes.
            </p>
          </div>
        }
      />
    </Feature4>
  </Features>
)

export default PackageFeatures3
