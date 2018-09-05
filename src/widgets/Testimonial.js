import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 800px;
  margin: 3rem auto;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 90px 1fr;
  grid-template-areas:
    'WI WQ'
    '. WN';
  @media (max-width: 940px) {
    align-items: center;
    justify-items: center;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      'WI'
      'WQ'
      'WN';
  }
`
const WrapperImage = styled.img`
  text-align: right;
  height: 110px;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  grid-area: WI;
`
const WrapperQuote = styled.div`
  text-align: left;
  font-size: 24px;
  font-weight: 800;
  display: inline-block;
  vertical-align: top;
  grid-area: WQ;
`
const WrapperName = styled.div`
  text-align: left;
  grid-area: WN;
`

const Testimonial = props => (
  <Wrapper className="Testimonial">
    <WrapperImage src={props.image} />

    <WrapperQuote>{props.quote}</WrapperQuote>

    <WrapperName>{props.name}</WrapperName>
  </Wrapper>
)

export default Testimonial
