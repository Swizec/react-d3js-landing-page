import React, { Component } from 'react'
import Carousel from 'nuka-carousel'
import styled from 'styled-components'
import Testimonial from '../widgets/Testimonial'
import Test1 from '../images/Test1.jpg'
import Test3 from '../images/Test3.jpg'
import Test2 from '../images/Test2.jpg'

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
            name="Johnathan Doe"
            company={'Founder and CEO of Company Inc'}
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
        </Carousel>
      </Wrapper>
    )
  }
}
