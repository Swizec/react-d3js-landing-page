import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`
const WrapperHeader = styled.div``
const WrapperImage = styled.div``
const WrapperCopy = styled.div``

const CopyLargeImageLeft = props => (
  <Wrapper>
    <WrapperHeader>{props.header}</WrapperHeader>

    <WrapperImage src={props.image} />

    <WrapperCopy>{props.copy}</WrapperCopy>
  </Wrapper>
)

export default CopyLargeImageLeft
