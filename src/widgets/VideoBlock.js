import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``

const WrapperVideo = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 0 3rem;
  text-align: center;
  @media (max-width: 940px) {
    .youtubevid {
      width: 300px;
      height: 169px; /* 225px */
    }
  }
`

const VideoBlock = props => (
  <Wrapper>
    <WrapperVideo>{props.video}</WrapperVideo>
  </Wrapper>
)

export default VideoBlock
