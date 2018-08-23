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
padding: 80px 50px 100px;
box-shadow: 0px 10px 25px rgba(0,0,0, .25);
border-radius: 20px;
`
const HeroContent = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-areas: 
"HC1 HC2"
"HC1 HC3";

img {
  grid-area: HC1;
  height: 400px;
  
}
h1 {
  grid-area: HC2;
  font-weight: 900;
  margin: 0;
}
h3 {
  grid-area: HC3;
  font-weight: 300;
  margin: 0;
}
@media (max-width: 640px) {
    img {
      height: 200px;
      margin: 0 auto;
    }
    h1 {
        font-size: 26px;
        margin: 30px 0;
    }
    h3 {
        font-size: 24px;
    }
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 
    "HC1"
    "HC2"
    "HC3"
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
          <h1>STUCK <br></br>COPY PASTING <br></br>RANDOM <br></br>D3 EXAMPLES</h1>
          <h3>Become a data visualization engineer with React + D3v4.</h3>
          </HeroContent>
        </HeroGroup>

      </Wrapper>
    )
  }
}
