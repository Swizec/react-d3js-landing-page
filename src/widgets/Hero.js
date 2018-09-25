import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 0;
  height: 600px;
  text-align: center;
  color: #fff;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  background-color: #424ea4;
`

const WrapperGroup = styled.div`
  margin: 0 5rem;
  padding: 5rem 5rem;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'ContentA ContentB';
`
const WrapperTopSub = styled.div`
  margin: 1rem 0;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  font-size: 1.25rem;
`
const WrapperHeader = styled.div`
  font-size: 3rem;
  font-weight: 600;
`
const WrapperSubtitle = styled.div`
  margin: 1rem 0;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 200;
`
const WrapperEmailInput = styled.div`
  input {
    margin-left: 10px;
    overflow: hidden;
    display: block;
    width: 100%;
    height: 36px;
    padding: 6px 14px;
    font-size: 14px;
    line-height: 1.57142857;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #cfd3cc;
    border-radius: 2px;
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-transition: border-color ease-in-out 0.15s,
      box-shadow ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    margin: 0;
  }
`
const WrapperEmailText = styled.div`
  padding: 1rem 0;
  font-size: 1rem;
  color: #e5e8ec;
  line-height: 1.5;
  font-weight: 600;
`
const WrapperEmailSubmit = styled.div`
  input {
    float: right;
    display: block;
    padding: 6px 14px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.57142857;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    background-clip: padding-box;
    border: 1px solid transparent;
    border-radius: 2px;
    background: #ff871c;
    color: #fff;
  }
`

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
        <WrapperEmailText>{props.emailtext}</WrapperEmailText>
        <WrapperEmailInput>{props.input}</WrapperEmailInput>
        <WrapperEmailSubmit>{props.submit}</WrapperEmailSubmit>
      </Content1>

      <Content2>
        <WrapperImage>{props.pic}</WrapperImage>
      </Content2>
    </WrapperGroup>
  </Wrapper>
)

export default Hero
