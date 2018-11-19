import React, { Component } from 'react'
import styled from 'styled-components'
import About1 from '../images/About1.png'
import About2 from '../images/About2.png'
import About3 from '../images/About3.png'
import About4 from '../images/About4.png'
import About5 from '../images/About5.png'
import About6 from '../images/About6.png'
import About7 from '../images/About7.png'
import About8 from '../images/About8.png'
import About9 from '../images/About9.png'
import About10 from '../images/About10.png'
import About11 from '../images/About11.svg'
import About12 from '../images/About12.png'
import About13 from '../images/About13.svg'
import About14 from '../images/About14.png'

const Wrapper = styled.div`
  img {
    width: 100px;
    padding: 5px;
    max-height: 80px;
    filter: greyscale(100%);
  }
`

export default class AboutMeFeatures extends Component {
  render() {
    return (
      <Wrapper>
        <img src={About1} alt="" />
        <img src={About2} alt="" />
        <img src={About3} alt="" />
        <img src={About4} alt="" />
        <img src={About5} alt="" />
        <img src={About6} alt="" />
        <img src={About7} alt="" />
        <img src={About8} alt="" />
        <img src={About9} alt="" />
        <img src={About10} alt="" />
        <img src={About11} alt="" />
        <img src={About12} alt="" />
        <img src={About13} alt="" />
        <img src={About14} alt="" />
      </Wrapper>
    )
  }
}
