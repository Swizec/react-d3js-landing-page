import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from "styled-components";
import logo from '../../images/Logo.png'
import './Header.css'


const Wrapper = styled.div`
position: fixed;
text-align: center;
width: 100%;
padding: 20px 0 20px 0;
z-index: 100%;
transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
display: grid;
grid-template-columns: repeat(3, auto);
align-items: center;
justify-items: center;
a {
  color: #fff;
  font-weight: 700;
}
button {
  padding: 8px 20px;
  font-size: 20px;
  font-weight: 300;
  color: #fff;
  background-image: -webkit-gradient(linear,left top,right top,from(#F5B765),to(#F5B765));
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  transition: 0.5s;
}
button:hover {
  background: #fff;
  color: #5334f5;
  box-shadow: 0 10px 20px rgba(0,0,0, 0.25);
  transform: translateY(-3px)
}
`
const Nav = styled.div`
margin: 0 auto;
padding: 0px 0 20px 0;
text-align: center;
`


class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll',
    this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({hasScrolled: true})
    } else {
      this.setState({hasScrolled: false})
    }
  }

  render() {
    return (
  <Nav>
    <Wrapper className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}> 
      
      <Link to='/'><img src={logo} height='60' alt=''/></Link>
      <Link to='/login'>Login</Link>
      <Link to='/Buy'><button>BUY</button></Link>
      
    </Wrapper>
  </Nav>
    )
  }
}

export default Header
