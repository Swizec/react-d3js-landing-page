import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``
const WrapperGroup = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 0;
  text-align: center;
`

const VideoBlock = props => (
  <Wrapper>
    <WrapperGroup>{props.video}</WrapperGroup>
  </Wrapper>
)

export default VideoBlock
