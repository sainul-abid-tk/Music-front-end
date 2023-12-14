import React from 'react'
import {Navbar,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <Navbar className="bg-info">
        <Container>
          <Navbar.Brand href="#home" style={{color:'white',fontSize:'25px',fontWeight:'bold'}}>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
          <i class="fa-solid fa-cloud-arrow-up fa-beat"></i>&nbsp;
            Media Player
          </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header