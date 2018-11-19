import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
  font-family: 'Open Sans', Arial, sans-serif;
`
const WrapperHeader = styled.div`
  font-weight: bold;
`
const WrapperLink = styled.div`
  text-align: center;
`

const ReadChapter = props => (
  <Wrapper>
    <WrapperHeader>{props.header}</WrapperHeader>
    <WrapperLink>{props.link}</WrapperLink>
  </Wrapper>
)

export default ReadChapter
