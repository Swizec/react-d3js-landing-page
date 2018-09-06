import React, { Component } from 'react'
import styled from 'styled-components'

const Chapter = styled.div`
  text-align: center;
`

export default class ReadChapter extends Component {
  render() {
    return (
      <Chapter>
        <p>
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
        </p>
      </Chapter>
    )
  }
}
