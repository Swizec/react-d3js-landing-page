import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`
const WrapperImage = styled.img`
  text-align: right;
  height: 110px;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
`
const WrapperQuote = styled.div`
  text-align: left;
  font-size: 24px;
  font-weight: 800;
  display: inline-block;
  vertical-align: top;
`
const WrapperName = styled.div`
  text-align: left;
`

const Testimonial = props => (
  <Wrapper className="Testimonial">
    <WrapperImage src={props.image} />

    <WrapperQuote>{props.quote}</WrapperQuote>

    <WrapperName>{props.name}</WrapperName>
  </Wrapper>
)

export default Testimonial
