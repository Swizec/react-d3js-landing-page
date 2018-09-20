import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: #e5e8ec;
  height: 100%;
  margin: 0rem 0rem;
  padding: 5rem 0;
  line-height: 1.42857143;
`
const WrapperHeader = styled.div`
  margin: 0 2rem;
  color: #384047;
  font-weight: 800;
  font-size: 30px;
  text-align: center;
  padding: 1rem 0 0;
  @media (max-width: 940px) {
    font-size: 20px;
  }
`

const ContactBar = props => (
  <Wrapper>
    <WrapperHeader>{props.header}</WrapperHeader>
  </Wrapper>
)

export default ContactBar
