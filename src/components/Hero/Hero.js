import React, { Component } from 'react'
import styled from "styled-components";
import Header from '../Hero/header'
import wallpaper from '../../images/wallpaper.jpg'
import Clay from '../../images/Clay.png'



const Wrapper = styled.div`
background-image: url(${wallpaper});
height: 800px;
background-size: cover;
background-position: center;
@media (max-width: 640px) {
    height: 900px;
}
`
const HeroGroup = styled.div`
max-width: 1100px;
padding: 0px 0px 0px;
margin: 0 auto;
display: grid;
align-items: center;
justify-items: center;
grid-template-columns: 1fr 1fr;
grid-template-areas:
"HC1 HC2";

h1 {
  text-shadow: 0 10px 20px rgba(0,0,0,.25);
  color: #fff;
  font-weight: 800;
  font-size: 54px;
  drop-shadow: 10px 10px 10px;
}
h2 {
  color: #fff;
  font-weight: 200;
}
img {

}
.HeroHeader1 {
grid-area: HC1;
vertical-align: top;
}
.HeroHeader2 {
grid-area: HC2;
}

`


export default class Hero extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <HeroGroup>
        <div className='HeroHeader1'>
          <h1>STUCK COPY PASTING RANDOM D3 EXAMPLES?</h1>
          <h2>Become a data visualization engineer with React + D3v4.</h2>
        </div>
        <div className='HeroHeader2'>
          <img src={Clay} height='600' alt=''/>
        </div>
        </HeroGroup>

      </Wrapper>
    )
  }
}
