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
  max-width: 800px;
  margin: 0 auto;
  padding: 0 0;
`
const Chapter = styled.div`
  text-align: center;
`
export default class CopyLight extends Component {
  render() {
    return (
      <Wrapper>
        <WrapperGroup>
          <p>
            Creating dynamic and interactive data visualizations on the web is a
            pain in the ass. It gets really hard when you add animation,
            inter-connected dashboards, and fast performance on mobile devices.
          </p>
          <p>
            You're either using libraries you can't customize, copy pasting D3
            examples you don't understand, or battling documentation to write
            spaghetti code you can't reuse.
          </p>
          <p>It's okay, we've all been there.</p>
          <p>But it doesn't have to be that way.</p>
          <p>
            With React+D3v4 you'll learn the basics of building fast data
            visualization components in about an hour. Get started immediately
            without installing anything.
          </p>
          <p>Don't know React? React+D3v4 starts at the very beginning. </p>
          <p>Struggling with D3? Every function is explained.</p>
          <p>
            New to modern JavaScript syntax? React+D3v4 comes with an
            interactive ES6 cheatsheet.
          </p>
          <p>
            Get the confidence you need to excell.
            <span role="img" aria-label="so cool">
              💪
            </span>
          </p>

          <Chapter>
            <p>
              <em>
                <strong>
                  Ready to get started?
                  <br />
                  <a href="/">
                    Try the free chapter.
                    <span role="img" aria-label="so cool">
                      👇
                    </span>
                  </a>
                </strong>
              </em>
            </p>
          </Chapter>
        </WrapperGroup>
        <CopySmallImageLeft />
        <CopySmallImageRight />
      </Wrapper>
    )
  }
}
