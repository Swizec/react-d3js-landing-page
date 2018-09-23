import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
`
const WrapperHeader = styled.div`
  font-size: 40px;
  text-align: center;
  margin: 0 0 2rem;
  @media (max-width: 940px) {
    font-size: 30px;
  }
`

const WrapperImage = styled.img`
  height: 300px;
  grid-area: Picture;
  border-radius: 400px;
`

const WrapperCopy = styled.div`
  font-size: 20px;
  line-height: 1.7;
  grid-area: Copy;
`
const WrapperTestimonial = styled.div``

const Content = styled.div`
  margin: 0 2rem;
  display: grid;
  grid-gap: 1rem;
  align-items: top;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'Copy Picture';
  @media (max-width: 940px) {
    align-items: center;
    justify-items: center;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      'Copy'
      'Picture';
  }
`

const CopyLargeImageLeft = props => (
  <Wrapper>
    <WrapperHeader>{props.header}</WrapperHeader>

    <Content>
      <WrapperImage src={props.image} alt="pic" />
      <WrapperCopy>{props.copy}</WrapperCopy>
    </Content>
    <WrapperTestimonial>{props.testimonial}</WrapperTestimonial>
  </Wrapper>
)

export default CopyLargeImageLeft
