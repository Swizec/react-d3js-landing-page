import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from "styled-components";
import logo from '../../images/Logo.png'
import './Header.css'


const Wrapper = styled.div`
display: grid;
margin: 0 auto;
padding: 0 20px;
grid-template-columns: 1fr 1fr;
max-width: 1100px;
img {
  background:rgba(255,255,255, 0.7);
  border-radius: 20px;
  padding: 10px;
  margin: 5rem 0 0;
  transition: 1s;
}
img:hover {
  background: #fff;
  box-shadow: 0 10px 300px rgba(0,0,0, 0.25);
  transform: translateY(-6px);
}

`



class Header extends Component {
  
  render() {
    return (
    <Wrapper> 
      <Link to='/'><img src={logo} height='35' alt=''/></Link>
    </Wrapper>
    )
  }
}

export default Header
