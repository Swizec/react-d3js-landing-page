import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 600px;
  margin: 3rem auto;
  display: grid;
  grid-gap: 10px;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-template-areas:
    'WQ'
    'WI'
    'WN';
  @media (max-width: 940px) {
    align-items: center;
    justify-items: center;
    display: grid;
  }
`
const WrapperGroup = styled.div`
  margin: 0 auto;
  text-align: center;
`
const WrapperImage = styled.img`
  margin: 1rem auto;
  height: 110px;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  grid-area: WI;
`
const WrapperQuote = styled.div`
  margin: 1rem auto;
  width: 80%;
  padding: 20px;
  text-align: center;
  background: #e5e8ec;
  color: #384047;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-style: italic;
  line-height: 28px;
  font-size: 16px;
  -webkit-box-shadow: 0 3px 0px rgba(195, 197, 201, 1);
  -moz-box-shadow: 0 3px 0px rgba(195, 197, 201, 1);
  box-shadow: 0 3px 0px rgba(195, 197, 201, 1);
  transition: all 0.6s ease;
  vertical-align: top;
  grid-area: WQ;
`
const WrapperName = styled.div`
  color: #384047;
  font-size: 16px;
  font-weight: bold;

  text-align: center;
  grid-area: WN;
`
const WrapperCompany = styled.div`
  color: #94a3a8;
  font-size: 14px;
  font-weight: 200;
  text-align: center;
  grid-area: WN;
`

const TestimonialDark = props => (
  <Wrapper className="Testimonial">
    <WrapperGroup>
      <WrapperQuote className="testblockdark">{props.quote}</WrapperQuote>

      <WrapperImage src={props.image} />

      <WrapperName>{props.name}</WrapperName>
      <WrapperCompany>{props.company}</WrapperCompany>
    </WrapperGroup>
  </Wrapper>
)

export default TestimonialDark
