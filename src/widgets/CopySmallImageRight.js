import React, { Component } from 'react'
import styled from 'styled-components'
import Image1 from '../images/image_1.png'

const Wrapper = styled.div`
  margin: 5rem auto;
`
const WrapperGroup = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: right;
  grid-template-areas: 'C2 C1';
  grid-gap: 1rem;

  .content1 {
    grid-area: C1;
  }
  .content2 {
    grid-area: C2;
  }
  h4 {
    color: #595c60;
    font-size: 22px;
    font-weight: 600;
    margin-top: 0;
  }
  p {
    line-height: 1.5;
    font-size: 16px;
    color: #94a3a8;
    font-weight: 300;
  }
  @media (max-width: 940px) {
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      'C1'
      'C2';
    align-items: center;
    justify-items: center;
    img {
      height: 80px;
    }
  }
`

export default class CopySmallImageRight extends Component {
  render() {
    return (
      <Wrapper>
        <WrapperGroup>
          <div className="content1">
            <img src={Image1} alt="img" />
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
        </WrapperGroup>
      </Wrapper>
    )
  }
}
