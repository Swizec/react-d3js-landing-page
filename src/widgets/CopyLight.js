import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: #fff;
  height: 100%;
  margin: 0rem 0rem;
  padding: rem;
  line-height: 1.42857143;
`
const WrapperGroup = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 0;
`
const WrapperHeader = styled.div`
  color: #384047;
  font-weight: 800;
  font-size: 40px;
  text-align: center;
  padding: 3rem 0 0;
  @media (max-width: 940px) {
    font-size: 34px;
  }
`
const WrapperSub = styled.div`
  margin: 1rem;
  padding: 2rem 0;
  text-align: center;
  font-weight: 200;
  font-size: 20px;
`

const WrapperCopy = styled.div`
  font-size: 20px;
  line-height: 1.7;
`
const WrapperTestimonial = styled.div`
  margin: 0 1rem;
`

const CopyLight = props => (
  <Wrapper>
    <WrapperGroup>
      <WrapperHeader>{props.header}</WrapperHeader>
      <WrapperSub>{props.subtitle}</WrapperSub>
      <WrapperCopy>{props.copy}</WrapperCopy>
      <WrapperTestimonial>{props.testimonial}</WrapperTestimonial>
    </WrapperGroup>
  </Wrapper>
)

export default CopyLight
