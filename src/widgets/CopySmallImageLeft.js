import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 2rem auto;
  padding: 2rem 2rem;
`
const WrapperGroup = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: left;
  grid-template-areas: 'C1 C2';
  grid-gap: 1rem;

  h4 {
    color: #595c60;
    font-size: 22px;
    font-weight: 600;
    margin-top: 0;
  }
  p {
    line-height: 1.5;
    font-size: 16px;
    color: #94a3a8;
    font-weight: 300;
  }
  @media (max-width: 940px) {
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      'C1'
      'C2';
    align-items: center;
    justify-items: center;
    img {
      height: 50px;
    }
  }
`
const WrapperImage = styled.img`
  grid-area: C1;
  height: 400px;
  width: 400px;
  object-fit: contain;
  @media (max-width: 940px) {
    height: 300px;
    width: 300px;
  }
`

const WrapperCopy = styled.div`
  grid-area: C2;
`

const CopySmallImageLeft = props => (
  <Wrapper>
    <WrapperGroup>
      <WrapperImage src={props.image} />
      <WrapperCopy>{props.copy}</WrapperCopy>
    </WrapperGroup>
  </Wrapper>
)

export default CopySmallImageLeft
