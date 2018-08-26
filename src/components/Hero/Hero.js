import React, { Component } from 'react'
import styled from "styled-components";
import Header from '../Hero/header'
import wallpaper from '../../images/wallpaper.jpg'
import Clay from '../../images/Clay.png'



const Wrapper = styled.div`
background-image: url(${wallpaper});
height: 930px;
background-size: cover;
background-position: center;
@media (max-width: 640px) {
    height: 930px;
}
`
const HeroGroup = styled.div`
max-width: 1000px;
padding: 0px 20px 0px;
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
  text-shadow: 0 10px 20px rgba(0,0,0,.25);
  drop-shadow: 10px 10px 10px;
}
img {
  height: 600px;
}

.HeroHeader1 {
grid-area: HC1;
}
.HeroHeader2 {
grid-area: HC2;
}
@media (max-width: 840px) {
  text-align: center;
  margin: 2rem 0 0;
    h1 {
        font-size: 36px;
    }
    h2 {
        font-size: 24px;
    }
    img {
      height: 300px;
    }
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr;
    grid-template-areas:
    "HC1"
    "HC2";
}
`
const Features = styled.div`
margin: 2rem auto;
padding: 0;
color: #fff;
max-width: 1200px;
.line {
    width: 150px;
    height: 3px;
    background: red;
    border-radius: 3px;
    margin-top: 15px;
    background-image: -webkit-gradient(linear,left top,right top,from(#f1a53c),to(#e85158));
}
h3 {
    color: #fff;
    font-size: 30px;
    margin: 4px;
    font-weight: 700;
    margin: 0;
    padding: 0;
    text-shadow: 0 10px 20px rgba(0,0,0,.25);
    drop-shadow: 10px 10px 10px;
}
p {
    color: #fff;
    margin: 5px 0;
    padding: 0;
    font-size: 15px;
    text-shadow: 0 10px 20px rgba(0,0,0,.25);
    drop-shadow: 10px 10px 10px;
}
display: grid;
align-items: center;
justify-items: center;
grid-template-columns: repeat(3, auto);
@media (max-width: 640px) {
    grid-template-columns: repeat(2, auto);
    div:nth-child(3){
        display: none;
    }
    h3 {
        font-size: 22px;
    }
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
          <img src={Clay} alt=''/>
        </div>
        </HeroGroup>

        <Features>
            <div>
                <p>Watch</p>
                <h3>4 hours</h3>
                <p>of video lessons</p>
                <div className='line'></div>
            </div>
            <div>
                <p>Use on any</p>
                <h3>Mobile Device</h3>
                <p>Tablet or Computer</p>
                <div className='line'></div>
            </div>
            <div>
                <p>Forever</p>
                <h3>Lifetime Access</h3>
                <p>Study now or later</p>
                <div className='line'></div>
            </div>
        </Features>

      </Wrapper>
    )
  }
}
