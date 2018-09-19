import React, { Component } from 'react'
import styled from 'styled-components'
import Testimonial from './Testimonial'
import product from '../images/Real-Space-Gray.png'
import logo from '../images/logo.png'
import wallpaper from '../images/header_bg.jpg'
import down_arrow from '../images/down_arrow.png'
import Test1 from '../images/Test1.jpg'

const Wrapper = styled.div`
  background-image: url(${wallpaper});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  text-align: center;
  position: relative;
  padding: 30px 15px 0;
  color: #fff;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  background-color: #424ea4;

  h1 {
    margin: 3rem 0;
  }
  h4 {
    font-weight: 100;
    line-height: 1.1;
  }
  .logo img {
    height: 70px;
  }
  .Testimonial {
    color: #94a3a8;
  }

  .scrollto,
  .scrollto:hover {
    display: block;
    text-decoration: none;
    position: absolute;
    bottom: -30px;
    left: 50%;
    height: 70px;
    margin-left: -50px;
  }
  .scrollto--arrow {
    padding: 10px;
    position: relative;
  }
  .scrollto--arrow img {
    animation: arrowbounce 1s alternate infinite;
    -moz-animation: arrowbounce 1s alternate infinite;
    -webkit-animation: arrowbounce 1s alternate infinite;
    -o-animation: arrowbounce 1s alternate infinite;
  }
  @media (max-width: 640px) {
    h1 {
      font-size: 30px;
    }
    h4 {
      font-size: 18px;
    }
  }
  @media (max-width: 940px) {
    .banner img {
      height: 300px;
    }
  }
`
const Content = styled.div`
  margin: 5rem;
  align-items: center;
  justify-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'Test ContentImage';
  .image {
    height: 600px;
    padding: 40px;
    grid-area: ContentImage;
  }
  .Testimonial {
    margin: 0 0rem;
    grid-area: Test;
  }

  @media (max-width: 640px) {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      ' ContentImage'
      'Test ';
  }
`

export default class Hero extends Component {
  render() {
    return (
      <Wrapper>
        <div className="preloader" />

        <main id="top" className="masthead" role="main">
          <div className="container">
            <div className="logo">
              {' '}
              <a href="/">
                <img src={logo} alt="readymade-logo" />
              </a>
            </div>

            <h1 className="main-title">
              STUCK COPY PASTING RANDOM D3 EXAMPLES?
            </h1>

            <h4 className="sub-title">
              Become a data visualization engineer with React + D3v4.
            </h4>

            <Content>
              <div className="Testimonial">
                <Testimonial
                  image={Test1}
                  quote="You just blew my mind! This is going to save me so much time."
                  name="Johnathan Doe"
                  company={'Founder and CEO of Company Inc'}
                />
              </div>
              <div className="banner">
                <img src={product} alt="Web App Banner" className="image" />
              </div>
            </Content>
          </div>

          <a href="#explore" className="scrollto">
            <p className="scrollto--arrow">
              <img src={down_arrow} alt="scroll down arrow" />
            </p>
          </a>
        </main>
      </Wrapper>
    )
  }
}
