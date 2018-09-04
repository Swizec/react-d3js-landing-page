import React, { Component } from 'react'
import styled from 'styled-components'
import webappbanner from '../images/Real Space Gray.png'
import logo from '../images/logo.png'
import wallpaper from '../images/header_bg.jpg'
import down_arrow from '../images/down_arrow.png'

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
  }
  h4 {
    font-weight: 100;
    line-height: 1.1;
  }
  .logo img {
    height: 70px;
  }
  .banner img {
    height: 600px;
    padding: 40px;
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

export default class Hero extends Component {
  render() {
    return (
      <Wrapper>
        <div class="preloader" />

        <main id="top" class="masthead" role="main">
          <div class="container">
            <div class="logo">
              {' '}
              <a href="/">
                <img src={logo} alt="readymade-logo" />
              </a>
            </div>

            <h1 class="main-title">STUCK COPY PASTING RANDOM D3 EXAMPLES?</h1>

            <h4 class="sub-title">
              Become a data visualization engineer with React + D3v4.
            </h4>

            <div class="row">
              <div class="banner">
                <img
                  src={webappbanner}
                  alt="Web App Banner"
                  className="image"
                />
              </div>
            </div>
          </div>

          <a href="#explore" class="scrollto">
            <p class="scrollto--arrow">
              <img src={down_arrow} alt="scroll down arrow" />
            </p>
          </a>
        </main>
      </Wrapper>
    )
  }
}
