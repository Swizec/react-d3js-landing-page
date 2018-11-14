import React, { Component } from 'react'
import CountdownBanner from '../widgets/CountdownBanner'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 0rem;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(20px);
  z-index: 2;
  position: fixed;
`
const WrapperContent = styled.div`
  text-align: center;
  color: #fff;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'TI DA';

  .title {
    grid-area: TI;
    font-size: 15px;
  }
  .date {
    grid-area: DA;
    font-size: 20px;
  }

  @media (max-width: 940px) {
    .title {
      font-size: 14px;
    }
    grid-template-columns: 1fr;
    grid-template-areas:
      'TI'
      'DA';
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
        <WrapperContent>
          <h3 className="title">
            Christmas Eve is coming soon (Midnight of 23rd to 24th Dec, UTC
            time):
          </h3>
          <CountdownBanner date={`${year}-12-24T00:00:00`} />
        </WrapperContent>
      </Wrapper>
    )
  }
}
