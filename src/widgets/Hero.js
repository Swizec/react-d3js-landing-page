import React from 'react'
import styled from 'styled-components'
import Particles from 'react-particles-js'

const Wrapper = styled.div`
  background-size: cover;
  background-position: left;
  margin: 0 auto;
  height: 100%;
  text-align: center;
  color: #fff;
  background-color: #424ea4;
  background-image: linear-gradient(45deg, #424ea4 35%, #7883c4 90%);

  border-top: 0.4rem solid #ff871c;
  font-family: 'Open Sans', Arial, sans-serif;
`

const WrapperGroup = styled.div`
  margin: 0 auto;
  padding: 5rem 5rem;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'ContentA ContentB';
  @media (max-width: 940px) {
    margin: 1.5rem auto 0;
    padding: 5rem 2rem;
    grid-template-columns: 1fr;
    grid-template-areas:
      'ContentA'
      'ContentB';
  }
`
const WrapperTopSub = styled.div`
  margin: 1rem 0;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  font-size: 1.25rem;
  @media (max-width: 940px) {
    text-align: center;
  }
`
const WrapperHeader = styled.div`
  font-size: 3rem;
  font-weight: 600;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  @media (max-width: 940px) {
    font-size: 2.3rem;
    text-align: center;
  }
`
const WrapperSubtitle = styled.div`
  margin: 1rem 0;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 900;
  color: #ff871c;
  @media (max-width: 940px) {
    text-align: center;
  }
`
const WrapperEmailText = styled.div`
  padding: 0rem 0 1rem;
  font-size: 1rem;
  color: #fff;
  line-height: 1.5;
  font-weight: 200;
  @media (max-width: 940px) {
    text-align: center;
  }
`
const WrapperEmailInput = styled.div`
  input {
    display: inline-block;
    width: 100%;
    margin: 0 11rem 0 0;
    padding: 14px 14px;
    font-family: 'Open Sans', Arial, sans-serif;
    font-size: 14px;
    line-height: 1.57142857;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 0px solid #cfd3cc;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    box-shadow: 0 15px 35px 0 rgba(42, 51, 83, 0.12),
      0 5px 15px rgba(0, 0, 0, 0.06);
  }
`
const WrapperEmailSubmit = styled.div`
  input {
    display: inline-block;
    padding: 13px 14px;
    margin: 0 1.7rem;
    font-family: 'Open Sans', Arial, sans-serif;
    font-size: 14px;
    font-weight: 600;
    font-weight: normal;
    line-height: 1.57142857;
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    background-clip: padding-box;
    border: 1px solid transparent;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    background: #ff871c;
    color: #fff;
    float: right;
    box-shadow: 0 15px 35px 0 rgba(42, 51, 83, 0.12),
      0 5px 15px rgba(0, 0, 0, 0.06);
  }
  input:hover {
    background: orange;
  }
`

const WrapperImage = styled.image`
  img {
    height: 400px;
  }
  @media (max-width: 940px) {
    img {
      margin: 3rem 0 0;
      height: 300px;
    }
  }
`
const Content2 = styled.div`
  grid-area: ContentB;
`
const Content1 = styled.div`
  grid-area: ContentA;
  text-align: left;
`
const particlesOptions = {
  particles: {
    number: {
      value: 40,
      Density: {
        enable: true,
        value_area: 800,
      },
    },
  },
  color: {
    value: '#84d6b7',
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
    },
  },
}

const Hero = props => (
  <Wrapper>
    <div className="toplayer">
      <WrapperGroup>
        <Content1>
          <WrapperTopSub>{props.topsub}</WrapperTopSub>
          <WrapperHeader>{props.header}</WrapperHeader>
          <WrapperSubtitle>{props.subtitle}</WrapperSubtitle>
          <WrapperEmailText>{props.emailtext}</WrapperEmailText>
          <div className="heroinput">
            <WrapperEmailInput>{props.input}</WrapperEmailInput>
            <WrapperEmailSubmit className="herobtn">
              {props.submit}
            </WrapperEmailSubmit>
          </div>
        </Content1>
        <Content2>
          <WrapperImage>{props.pic}</WrapperImage>
        </Content2>
      </WrapperGroup>
    </div>
    <Particles className="particles" params={particlesOptions} />
  </Wrapper>
)

export default Hero
