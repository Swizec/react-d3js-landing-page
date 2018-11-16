import React, { Component } from 'react'
import styled from 'styled-components'
import CTAButton from './CTAButton'

const Wrapper = styled.div`
  background-color: #424ea4;
  background-image: linear-gradient(45deg, #424ea4 35%, #7883c4 90%);
  height: 100%;
  text-align: center;
  color: #fff;
  h1 {
    margin: 0;
    padding: 0rem 0;
  }
  .button {
    font-family: 'Open Sans', Arial, sans-serif;
    background-color: #ff871c;
    line-height: 1.8;
    -webkit-box-shadow: 0 3px 0 rgb(214, 106, 18);
    box-shadow: 0 3px 0 rgb(214, 106, 18);
    text-transform: uppercase;
    text-decoration: none;
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
  .button:hover {
    background: orange;
  }
  @media (max-width: 940px) {
    .button {
      font-size: 20px;
    }
  }
`
const WrapperGroup = styled.div`
  padding: 5rem 0;
`

export default class CTABlock extends Component {
  render() {
    return (
      <Wrapper>
        <WrapperGroup>
          <h1>Check Out The Packages!</h1>
          <CTAButton
            link={
              <a href="#Packages" className="button">
                Learn More
              </a>
            }
          />
        </WrapperGroup>
      </Wrapper>
    )
  }
}
