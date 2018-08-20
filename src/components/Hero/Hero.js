import React, { Component } from 'react'
import styled from "styled-components";
import Header from '../Hero/header'
import Book from '../../images/Book.png'


const Wrapper = styled.div`
margin: 0;
`
const HeroGroup = styled.div`
position: relative;
background-color: #fff;
margin: 100px auto;
width: 65%;
max-width: 1000px;
padding: 100px 50px 100px;
box-shadow: 0px 5px 15px rgba(0,0,0, .25);
border-radius: 20px;
`
const HeroContent = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-areas: 
"HC1 HC2";

img {
  grid-area: HC1;
  height: 400px;
  
}
h1 {
  grid-area: HC2;
  font-weight: 800;
}
`

export default class Hero extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <HeroGroup>
          <HeroContent>
          <img src={Book} alt=''/>
          <h1>STUCK <br></br>COPY PASTING RANDOM D3 EXAMPLES</h1>
          </HeroContent>
        </HeroGroup>

      </Wrapper>
    )
  }
}
