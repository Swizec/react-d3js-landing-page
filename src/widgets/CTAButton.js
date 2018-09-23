import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  button {
    font-family: 'Open Sans', Arial, sans-serif;
    background-color: #ff871c;
    line-height: 1.8;
    -webkit-box-shadow: 0 3px 0 rgb(214, 106, 18);
    box-shadow: 0 3px 0 rgb(214, 106, 18);
    text-transform: uppercase;
    padding: 1rem;
    margin: 1rem 0;
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    font-size: 34px;
    line-height: 1.42857143;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  @media (max-width: 940px) {
    button {
      font-size: 20px;
    }
  }
`

const CTAButton = props => (
  <Wrapper>
    <div>{props.link}</div>
  </Wrapper>
)
export default CTAButton
