import React, { Component } from 'react'
import Carousel from 'nuka-carousel'
import styled from 'styled-components'
import Testimonial from '../widgets/Testimonial'
import Test1 from '../images/Test1.jpg'
import Test3 from '../images/Test3.jpg'
import Test2 from '../images/Test2.jpg'
import Test5 from '../images/Test5.png'
import Test6 from '../images/Test6.jpg'

const Wrapper = styled.div`
  max-width: 800px;
  margin: 4rem auto;
`

export default class extends Component {
  render() {
    return (
      <Wrapper>
        <Carousel>
          <Testimonial
            image={Test1}
            quote="You just blew my mind! This is going to save me so much time."
            name="Patrick Davidson"
            company={'Developer at Phytozome Group, JGI, Lawrence Berkeley Lab'}
          />
          <Testimonial
            image={Test3}
            quote="I'm starting a new position where I will focus on data visualization using React and d3. I got everything I needed from the book, your examples were straight forward and easy to follow. Thanks!"
            name="Aristides Staffieri"
            company={'Engineer at ProtectWise'}
          />
          <Testimonial
            image={Test2}
            quote="Great read with solid foundations to get you started crawling with react and up to a sprint!"
            name="MΛHDI"
            company={'Creator of Gyroscope'}
          />
          <Testimonial
            image={Test5}
            quote="The examples in V4 are off the hook. No wonder its been so much work, you have really extended the learning process into fun, interactive projects. I was specifically trying to learn topojson an map visualizations! What a breeze!"
            name="Julio Gudiño"
            company={'Frontend Developer'}
          />
          <Testimonial
            image={Test6}
            quote="I love having practical examples to help me learn new things faster. D3's docs alone are okay but marrying them with React (as a react newbie) is not as straightforward as someone handholding you through the process. And, since I don't have hours after work or on weekends to hack on things like I used to before I was married (or had kids), I need to optimize my learning."
            name="Paulo Elias"
            company={'Self Taught Developer'}
          />
        </Carousel>
      </Wrapper>
    )
  }
}
