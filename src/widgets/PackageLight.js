import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100%;
  margin: 0rem 0rem;
  padding: 2rem;
  line-height: 1.42857143;
  font-family: 'Open Sans', Arial, sans-serif;
`

const WrapperGroup = styled.div`
  max-width: 1100px;
  margin: 4rem auto;
  padding: 0 0;
`

const WrapperHeader = styled.div`
  text-align: center;
  font-size: 40px;
  color: #595c60;
  @media (max-width: 940px) {
    font-size: 30px;
  }
`

const WrapperSubtitle = styled.div`
  margin: 0 0 3rem;
  text-align: center;
  font-size: 30px;
  @media (max-width: 940px) {
    font-size: 20px;
  }
`

const WrapperCopy = styled.div``

const WrapperButton = styled.div`
  text-align: center;
`

const PackageLight = props => (
  <Wrapper>
    <WrapperGroup>
      <WrapperHeader>{props.header}</WrapperHeader>
      <WrapperSubtitle>{props.subtitle}</WrapperSubtitle>
      <WrapperCopy>{props.copy}</WrapperCopy>
      <WrapperButton>{props.button}</WrapperButton>
    </WrapperGroup>
  </Wrapper>
)

export default PackageLight
