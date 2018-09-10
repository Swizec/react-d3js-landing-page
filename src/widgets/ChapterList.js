import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100%;
  margin: 0rem 0rem;
  padding: 2rem;
  line-height: 1.42857143;
`
const WrapperGroup = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 0;
`
const WrapperTitle = styled.div`
  text-align: center;
  font-size: 40px;
  color: #595c60;
`
const WrapperSubTitle = styled.div`
  text-align: center;
  font-size: 30px;
`
const WrapperChapList = styled.div`
  list-style: none;
  h1 {
    font-size: 24px;
    color: #595c60;
  }
  p {
    font-size: 18px;
    font-weight: bold;
  }
`

const ChapterList = props => (
  <Wrapper>
    <WrapperGroup>
      <WrapperTitle>{props.title}</WrapperTitle>
      <WrapperSubTitle>{props.subtitle}</WrapperSubTitle>
      <WrapperChapList>{props.chapters}</WrapperChapList>
    </WrapperGroup>
  </Wrapper>
)

export default ChapterList
