import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
  position: relative;

  color: #fff;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  background-color: #424ea4;
`

const WrapperGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'ContentA ContentB';
`
const WrapperTopSub = styled.div``
const WrapperHeader = styled.div``
const WrapperSubtitle = styled.div``
const WrapperEmail = styled.div``
const WrapperImage = styled.image`
  img {
    height: 400px;
  }
`
const Content2 = styled.div`
  grid-area: ContentB;
`
const Content1 = styled.div`
  grid-area: ContentA;
  text-align: left;
`

const Hero = props => (
  <Wrapper>
    <WrapperGroup>
      <Content1>
        <WrapperTopSub>{props.topsub}</WrapperTopSub>
        <WrapperHeader>{props.header}</WrapperHeader>
        <WrapperSubtitle>{props.subtitle}</WrapperSubtitle>
        <WrapperEmail>{props.email}</WrapperEmail>
      </Content1>

      <Content2>
        <WrapperImage>{props.pic}</WrapperImage>
      </Content2>
    </WrapperGroup>
  </Wrapper>
)

export default Hero
