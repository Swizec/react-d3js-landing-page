import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 500px;
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
const WrapperImage = styled.img`
  margin: 1rem auto;
  height: 110px;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  grid-area: WI;
`
const WrapperQuote = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  background: #fff;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-style: italic;
  position: relative;
  line-height: 28px;
  font-size: 16px;
  -webkit-box-shadow: 0 3px 0px rgba(195, 197, 201, 1);
  -moz-box-shadow: 0 3px 0px rgba(195, 197, 201, 1);
  box-shadow: 0 3px 0px rgba(195, 197, 201, 1);
  transition: all 0.6s ease;
  display: inline-block;
  vertical-align: top;
  grid-area: WQ;
`
const WrapperName = styled.div`
  .name {
    color: #384047;
    font-size: 16px;
  }
  .company {
    color: ##94a3a8;
    font-size: 14px;
    font-weight: 300;
  }
  text-align: center;
  grid-area: WN;
`

const Testimonial = props => (
  <Wrapper className="Testimonial">
    <WrapperQuote>{props.quote}</WrapperQuote>

    <WrapperImage src={props.image} />

    <WrapperName>{props.name}</WrapperName>
  </Wrapper>
)

export default Testimonial
