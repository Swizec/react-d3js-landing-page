import React, { Component } from 'react'
import styled from 'styled-components'
import webappbanner from '../images/web-app-banner.png'
import logo from '../images/readymade_logo.png'
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
    .image {
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

            <h1 class="main-title">Multipurpose Landing Page Template</h1>

            <h4 class="sub-title">
              Suits best for any kind of startups and local business.{' '}
            </h4>

            <div class="row">
              <div class="col-md-12">
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
