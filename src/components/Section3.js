import React, { Component } from 'react'
import styled from "styled-components";


const Wrapper = styled.div`
margin: 5rem auto;
`
const WrapperGroup = styled.div`
max-width: 1000px;
padding: 0px 20px 0px;
margin: 0 auto;

@media (max-width: 840px) {
    h1 {
        text-align: center;
        font-size: 30px;
    }
  margin: 2rem 0 0;
}
`

export default class Section3 extends Component {
  render() {
    return (
      <Wrapper>

        <WrapperGroup>
            <h1>LEARNING A NEW CODING PARADIGM IS HARD</h1>
            <p>React is the biggest revolution in JavaScript programming since jQuery hit the scene 10 years ago, and D3 is unlike anything you've seen before.
            <br></br>
            "How the hell is it doing that?" is the most common phrase I hear when teaching people about React and D3. "What do I put in a component? Should it be a state or a prop? These D3 examples don't make any sense"
            <br></br>
            The problem comes from how most of us first learn to code. "It's like a cooking recipe", teachers will say.
            Take a bellpepper and cut it up. Then sprinkle some salt and pepper, add olive oil, and voila: you have a refreshing salad. A very simple salad with a single ingredient, but it's a salad. You can follow along and eventually you will understand what the code does.
            <br></br>
            That's called imperative programming. It reads as a series of steps. How to do something.
            <br></br>
            But React and D3 are declarative. You don't write How you want your code to work, you write What you want to achieve. Your bellpepper salad recipe looks more like this: 
            <br></br>
            You look at that and you immediately know it's a salad. It involves oil and bellpeppers. You don't have to read all the steps to know the result. The recipe declares what it's making.
            Declarative code makes your project cleaner and easier to maintain, which means you spend more time delivering value to your users and clients.
            But learning how to think declaratively is hard. It feels like voodoo magic until you get used to it. We've all been there. To this day it still hurts my brain sometimes.
            <br></br>
            That's why React+D3v4 takes you on a journey through 7 projects and 5 interactive examples. Learn the basics in about an hour then dive as deep as you want to solidify your knowledge. Get the confidence you need to excell at your job.
            </p>
        </WrapperGroup>
        
      </Wrapper>
    )
  }
}
