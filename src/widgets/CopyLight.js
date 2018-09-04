import React, { Component } from 'react'
import styled from 'styled-components'
import CopySmallImageLeft from './CopySmallImageLeft'
import CopySmallImageRight from './CopySmallImageRight'

const Wrapper = styled.div`
  background: #fff;
  font-weight: 300;
  height: 100%;
  margin: 0 0rem;
  padding: 2rem;
  color: #94a3a8;
  font-size: 24px;
  line-height: 1.42857143;
  color: #333;
`
const WrapperGroup = styled.div`
  margin: 0 auto;
  padding: 0 0;
`
export default class CopyLight extends Component {
  render() {
    return (
      <Wrapper>
        <WrapperGroup>
          <CopySmallImageLeft />
          <CopySmallImageRight />
        </WrapperGroup>
      </Wrapper>
    )
  }
}
