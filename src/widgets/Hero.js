import React, { Component } from 'react'
import styled from "styled-components";
import webappbanner from '../images/web-app-banner.png'
import logo from '../images/readymade_logo.png'
import wallpaper from '../images/header_bg.jpg'
import down_arrow from '../images/down_arrow.png'

import './widget.css'

const Wrapper = styled.div`
background-image: url(${wallpaper});
background-size: cover;
background-position: center;
text-align: center;

h1 {
  color: #fff;
}
h4 {
  color: #fff;
  font-weight: 100;
  line-height: 1.1;
}
@media (max-width: 640px) {
  h1 {
  font-size: 30px;
  }
  h4 {
    font-size: 18px;
  }
  .image {
    height: 200px;
  }
}
`

export default class Hero extends Component {
  render() {
    return (
 
      <div>
        <div class="preloader" />

        <main id="top" class="masthead" role="main" />
        <div class="container">
          <div class="logo">
            {' '}
            <a href="#">
              <img src="images/readymade_logo.png" alt="readymade-logo" />
            </a>
          </div>

          <h1 class="main-title">Multipurpose Landing Page Template</h1>

          <h4 class="sub-title">
            Suits best for any kind of startups and local business.{' '}
          </h4>

          <div class="row">
            <div class="col-md-12">
              <img
                src="images/web-app-banner.png"
                alt="Web App Banner"
                class="img-responsive center-block"
              />
            </div>
          </div>
        </div>
      </div>

      <Wrapper>
        <div class="preloader"></div>
        
        <main id="top" class="masthead" role="main">
          <div class="container"> 
            
            <div class="logo"> <a href="#"><img src={logo} alt="readymade-logo"/></a> 
            </div>
            
            <h1 class="main-title">Multipurpose Landing Page Template</h1>
            
            <h4 class="sub-title">Suits best for any kind of startups and local business. </h4>
            
            
            <div class="row">
            <div class="col-md-12">
            <img src={webappbanner} alt="Web App Banner" className="image"/>
            </div>
            </div>
            
              
              
          </div>
          
          <a href="#explore" class="scrollto">
          <p class="scrollto--arrow"><img src={down_arrow} alt="scroll down arrow"/></p>
          </a> 
          
        </main>
      </Wrapper>
      
 
    )
  }
}
