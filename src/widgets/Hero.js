import React, { Component } from 'react'
import styled from "styled-components";
import webappbanner from '../images/web-app-banner.png'
import logo from '../images/readymade_logo.png'
import './widget.css'

const Wrapper = styled.div`
text-align: center;
`

export default class Hero extends Component {
  render() {
    return (
      <Wrapper>
        <div class="preloader"></div>
        
        <main id="top" class="masthead" role="main"/>
        <div class="container"> 
            
            <div class="logo"> <a href="#"><img src={logo} alt="readymade-logo"/></a> 
            </div>
            
            <h1 class="main-title">Multipurpose Landing Page Template</h1>
            
            <h4 class="sub-title">Suits best for any kind of startups and local business. </h4>
            
            
            <div class="row">
                <div class="col-md-12">
                <img src={webappbanner} alt="Web App Banner" class="img-responsive center-block"/>
                </div>
            </div>
            
            
        </div>
        </Wrapper>
      
    )
  }
}
