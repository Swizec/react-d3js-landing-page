import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 3rem 1rem;
  font-family: 'Open Sans', Arial, sans-serif;
`
const WrapperQuestion = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin: 10px 0;
  color: #384047;
`

const WrapperAnswer = styled.div`
  font-weight: 100;
  font-size: 14px;
  color: #94a3a8;
`

const FAQ = props => (
  <Wrapper>
    <WrapperQuestion>{props.question}</WrapperQuestion>
    <WrapperAnswer>{props.answer}</WrapperAnswer>
  </Wrapper>
)

export default FAQ
