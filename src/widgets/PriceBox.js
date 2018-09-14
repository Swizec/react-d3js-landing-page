import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 2rem auto;
  display: inline-block;
`
const WrapperGroup = styled.div`
  margin: 2rem 2rem;
  padding: 3rem;
  text-align: center;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  background-color: #fff;
  position: relative;

  .price {
    margin: 1rem 1rem;
    font-size: 52px;
    font-weight: 300;
    margin: 0px auto;
    background: #e5e8ec;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    width: 140px;
    height: 140px;
    line-height: 128px;
  }
  .planname {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 24px;
    color: #474d56;
    padding: 15px 0;
    border-bottom: 1px solid #dde8ec;
    margin-bottom: 15px;
  }
  .plan-features {
    text-align: center;
    line-height: 2;
    font-size: 16px;
    margin-bottom: 20px;
  }
  .action-btn {
    position: absolute;
    bottom: -15px;
    left: 50%;
    margin-left: -80px;
  }
  .curr {
    display: inline-block;
    font-size: 20px;
    vertical-align: super;
  }
`

const PriceBox = props => (
  <Wrapper>
    <WrapperGroup>
      <div className="pricing">
        <div className="price">{props.price}</div>
        <div className="planname">{props.plan}</div>
        <div className="plan-features">{props.features}</div>
        <div className="action-btn">{props.button}</div>
      </div>
    </WrapperGroup>
  </Wrapper>
)

export default PriceBox
