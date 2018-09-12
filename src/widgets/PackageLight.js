import React from 'react'
import styled from 'styled-components'
import CopySmallImageLeft from './CopySmallImageLeft'
import F1 from '../images/F1.png'
import F2 from '../images/F2.png'
import F3 from '../images/F3.gif'
import F4 from '../images/F4.gif'
import F5 from '../images/F5.gif'
import F6 from '../images/F6.png'

const Wrapper = styled.div`
  height: 100%;
  margin: 0rem 0rem;
  padding: 2rem;
  line-height: 1.42857143;
`

const WrapperGroup = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 0;
`

const WrapperHeader = styled.div`
  text-align: center;
  font-size: 40px;
  color: #595c60;
  @media (max-width: 940px) {
    font-size: 30px;
  }
`

const WrapperSubtitle = styled.div`
  text-align: center;
  font-size: 30px;
  @media (max-width: 940px) {
    font-size: 20px;
  }
`

const WrapperCopy = styled.div``

const WrapperButton = styled.div``

const Features = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'F1 F2'
    'F3 F4'
    'F5 F6';
  img {
    height: 150px;
    width: 150px;
  }
  @media (max-width: 940px) {
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      'F1'
      'F2'
      'F3'
      'F4'
      'F5'
      'F6';
    align-items: center;
    justify-items: center;
    img {
      height: 100px;
    }
  }
`

const PackageLight = props => (
  <Wrapper>
    <WrapperGroup>
      <WrapperHeader>{props.header}</WrapperHeader>
      <WrapperSubtitle>{props.subtitle}</WrapperSubtitle>
      <WrapperCopy>{props.copy}</WrapperCopy>
      <Features>
        <CopySmallImageLeft
          image={F1}
          copy={
            <div>
              <h4>REACT+D3V4</h4>
              <p>
                249 pages of code samples and explanation in PDF, ePUB, or MOBI.
                A solid guide to building your first data visualization with
                React and d3.js.
              </p>
            </div>
          }
        />
        <CopySmallImageLeft
          image={F2}
          copy={
            <div>
              <h4>1 WEEK OF COACHING</h4>
              <p>
                I will help you get started and review your code. Includes up to
                1 hour video chat and pair programming.
              </p>
            </div>
          }
        />
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
        <CopySmallImageLeft
          image={F5}
          copy={
            <div>
              <h4>7 FULL PROJECTS</h4>
              <p>
                Full working projects built with React and D3v4. I included my
                code history so you can learn from my mistakes.
              </p>
            </div>
          }
        />
        <CopySmallImageLeft
          image={F6}
          copy={
            <div>
              <h4>WEEKLY LIVECODING</h4>
              <p>
                Weekly livecoding sessions with React, D3.js and others. Come
                watch me learn new technologies and solve coding problems live.
                Ask me anything, it's like office hours
              </p>
            </div>
          }
        />
      </Features>
      <WrapperButton>{props.button}</WrapperButton>
    </WrapperGroup>
  </Wrapper>
)

export default PackageLight
