import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: #e5e8ec;
  height: 100%;
  margin: 0rem 0rem;
  padding: 2rem;
  line-height: 1.42857143;
  color: #384047;
  font-family: 'Open Sans', Arial, sans-serif;
`

const WrapperGroup = styled.div`
  max-width: 1100px;
  margin: 4rem auto;
  padding: 0 0;
`

const WrapperHeader = styled.div`
  text-align: center;
  font-size: 40px;
  color: #595c60;
  @media (max-width: 940px) {
    font-size: 30px;
  }
`

const WrapperBlock = styled.div`
  max-width: 100%;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 940px) {
    font-size: 20px;
  }
`

const WrapperCopy = styled.div`
  margin: 5rem 0;
  font-size: 25px;
  text-align: center;
`
const WrapperTestimonial = styled.div`
  margin: 5rem 0;
  font-size: 25px;
  text-align: center;
`

const Pricing = props => (
  <Wrapper>
    <WrapperGroup>
      <WrapperHeader>{props.header}</WrapperHeader>
      <WrapperBlock>{props.block}</WrapperBlock>
      <WrapperCopy>{props.copy}</WrapperCopy>
      <WrapperTestimonial>{props.testimonial}</WrapperTestimonial>
    </WrapperGroup>
  </Wrapper>
)

export default Pricing
