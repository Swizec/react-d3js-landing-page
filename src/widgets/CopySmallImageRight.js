import React, { Component } from 'react'
import styled from 'styled-components'
import Image1 from '../images/image_1.png'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  grid-template-areas: 'C2 C1';

  .content1 {
    grid-area: C1;
  }
  .content2 {
    grid-area: C2;
  }
`

export default class CopySmallImageRight extends Component {
  render() {
    return (
      <Wrapper>
        <div className="content1">
          <img src={Image1} alt="img" class="img-responsive center-block" />
        </div>

        <div className="content2">
          <h4 class="zigzag-lead">Optimized for mobile devices</h4>
          <p>
            Suspendisse lobortis, odio in interdum vestibulum, nibh ex porta
            diam, ac suscipit massa quam quis neque. Aliquam erat volutpat.
            Etiam auctor luctus nisi vel volutpat. Curabitur sagittis magna eu
            felis pellentesque, ut tempus orci scelerisque. Quisque feugiat
            tellus at nibh tincidunt, ut rhoncus risus lobortis.
          </p>
        </div>
      </Wrapper>
    )
  }
}
