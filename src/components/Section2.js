import React, { Component } from 'react'
import { Link } from 'gatsby'

import styled from "styled-components";
import Clay2 from '../images/Clay2.png'


const Wrapper = styled.div`
margin: 5rem auto;
`
const WrapperGroup = styled.div`
max-width: 1000px;
padding: 0px 20px 0px;
margin: 0 auto;
display: grid;
align-items: right;
justify-items: right;
grid-template-columns: 1fr 1fr;
grid-template-areas:
"C1 C2";

img {
  height: 600px;
}

.Content1 {
grid-area: C1;
align-items: top;
}
.Content2 {
grid-area: C2;

}
@media (max-width: 840px) {
  text-align: center;
  margin: 2rem 0 0;

    img {
      height: 300px;
    }
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr;
    grid-template-areas:
    "C1"
    "C2";
}
`
const Chapter = styled.div`
text-align: center;
`

export default class Section2 extends Component {
  render() {
    return (
      <Wrapper>
        <WrapperGroup>
            <div className='Content1'>
                <h3>Creating dynamic and interactive data visualizations on the web is a pain in the ass.</h3>
                <p>
                 It gets really hard when you add animation, inter-connected dashboards, and fast performance on mobile devices.
                You're either using libraries you can't customize, copy pasting D3 examples you don't understand, or battling documentation to write spaghetti code you can't reuse.
                It's okay, we've all been there.

                But it doesn't have to be that way.

                With React+D3v4 you'll learn the basics of building fast data visualization components in about an hour. Get started immediately without installing anything.
                Don't know React? React+D3v4 starts at the very beginning.
                Struggling with D3? Every function is explained.
                New to modern JavaScript syntax? React+D3v4 comes with an interactive ES6 cheatsheet.
                Get the confidence you need to excell.<span role='img'aria-label="emoji">💪</span>

                
                </p>
            </div>
            <div className='Content2'>
                <img src={Clay2} alt=''/>
            </div>
            
        </WrapperGroup>
        <Chapter>
            <p>Ready to get started?</p>
            <Link to='/'>Try the free chapter.<span role='img'aria-label="emoji">👇</span></Link>
        </Chapter>
      </Wrapper>
    )
  }
}
