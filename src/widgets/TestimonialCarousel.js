import React from 'react'
import Carousel from 'nuka-carousel'
import styled from 'styled-components'
import Testimonial from '../widgets/Testimonial'
import Test1 from '../images/Test1.jpg'

const Wrapper = styled.div`
  max-width: 800px;
  margin: 4rem auto;
`

export default class extends React.Component {
  render() {
    return (
      <Wrapper>
        <Carousel>
          <Testimonial
            image={Test1}
            quote="You just blew my mind! This is going to save me so much time."
            name="Johnathan Doe"
            company={'Founder and CEO of ' + 'Company Inc'}
          />
          <Testimonial
            image={Test1}
            quote="You just blew my mind! This is going to save me so much time."
            name="Johnathan Doe"
            company={'Founder and CEO of ' + 'Company Inc'}
          />
          <Testimonial
            image={Test1}
            quote="You just blew my mind! This is going to save me so much time."
            name="Johnathan Doe"
            company={'Founder and CEO of ' + 'Company Inc'}
          />
        </Carousel>
      </Wrapper>
    )
  }
}
