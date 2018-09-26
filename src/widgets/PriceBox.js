import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 2rem auto;
  display: inline-block;
  font-family: 'Open Sans', Arial, sans-serif;
`
const WrapperGroup = styled.div`
  padding: 3rem;
  margin: 0 1rem;
  text-align: center;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  background-color: #fff;
  position: relative;
  display: block;

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
    margin-left: -60px;
  }
  .curr {
    display: inline-block;
    font-size: 20px;
    vertical-align: super;
  }
  .btn-grey {
    background-color: #868c96;
    line-height: 1.8;
    color: #fff;
    -webkit-box-shadow: 0 3px 0 rgb(108, 115, 107);
    box-shadow: 0 3px 0 rgb(108, 115, 107);
    text-decoration: none;
  }
  .btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
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
