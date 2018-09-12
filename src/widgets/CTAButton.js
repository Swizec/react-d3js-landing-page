import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #ff871c;
  line-height: 1.8;
  -webkit-box-shadow: 0 3px 0 rgb(214, 106, 18);
  box-shadow: 0 3px 0 rgb(214, 106, 18);
  padding: 10px 28px;
  height: 52px;
  border-radius: 3px;
  text-align: center;
`

const CTAButton = props => <Wrapper>{props.link}</Wrapper>

export default CTAButton
