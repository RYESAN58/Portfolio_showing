import React from 'react'

import {
  Button,
  Nav,
  Navbar,
  Navdropdown,
  Container,
  NavbarBrand
} from 'react-bootstrap'
import HomeIcon from '@mui/icons-material/Home';
import {Link, NavLink, withRouter} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Navbar expand='lg' sticky='top' className='header'>
        <Nav.Link as={NavLink} to='/'>
          <NavbarBrand>
            <HomeIcon/>
          </NavbarBrand>
        </Nav.Link>
        <Navbar.Collapse>
          <Nav>
            <Nav.Link>

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header