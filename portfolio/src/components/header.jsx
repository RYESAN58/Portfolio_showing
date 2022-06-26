import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {
  Button,
  Nav,
  Navbar,
  Container,
  NavbarBrand,
  NavLink
} from 'react-bootstrap'
import HomeIcon from '@mui/icons-material/Home';
import {Link} from 'react-router-dom'

const Header = (props) => {
  const pathName = props?.location?.pathname
  return (
    <div>
      <Navbar expand='lg' sticky='top' className='header'>
        <Container>
        <NavLink as={Link} to='/'>
          <NavbarBrand>
            <HomeIcon/>
          </NavbarBrand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <NavLink as={Link} to='/' className={pathName == '/' ? "header_link_active": "header_link"}>
              Porfolio
            </NavLink>
            <NavLink as={Link} to='/resume' className={pathName == '/resume' ? "header_link_active": "header_link"}>
              Resume
            </NavLink>
          </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
    </div>
  )
}

export default Header