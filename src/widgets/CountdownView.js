import React, { Component } from 'react'
import Countdown from '../widgets/Countdown'
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
  @media (max-width: 940px) {
    .title {
      font-size: 22px;
    }
  }
`

export default class CountdownView extends Component {
  render() {
    const currentDate = new Date()
    const year =
      currentDate.getMonth() === 11 && currentDate.getDate() > 23
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear()
    return (
      <Wrapper>
        <h3 className="title">
          Christmas Eve is coming soon (Midnight of 23rd to 24th Dec, UTC time):
        </h3>
        <Countdown date={`${year}-12-24T00:00:00`} />
      </Wrapper>
    )
  }
}
