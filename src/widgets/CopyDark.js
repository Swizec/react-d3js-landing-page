import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: #e5e8ec;
  height: 100%;
  margin: 0rem 0rem;
  padding: 1rem;
  line-height: 1.42857143;
`
const WrapperGroup = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 0;
`
const WrapperHeader = styled.div`
  color: #384047;
  font-weight: 800;
  font-size: 40px;
  text-align: center;
  padding: 1rem 0 0;
  @media (max-width: 940px) {
    font-size: 34px;
  }
`
const WrapperSub = styled.div`
  margin: 1rem;
  text-align: center;
  font-weight: 200;
  font-size: 20px;
`

const WrapperCopy = styled.div`
  text-align: center;
  font-size: 20px;
  line-height: 1.7;
  @media (max-width: 940px) {
    img {
      height: 200px;
    }
  }
`
const WrapperTestimonial = styled.div`
  margin: 0 0rem;
`

const CopyDark = props => (
  <Wrapper>
    <WrapperGroup>
      <WrapperHeader>{props.header}</WrapperHeader>
      <WrapperSub>{props.subtitle}</WrapperSub>
      <WrapperCopy>{props.copy}</WrapperCopy>
      <WrapperTestimonial>{props.testimonial}</WrapperTestimonial>
    </WrapperGroup>
  </Wrapper>
)

export default CopyDark
