import React from 'react'
import "../App.css"
import 'bootstrap/dist/css/bootstrap.css';
import {
  Nav,
  Navbar,
  Container,
  NavbarBrand,
  NavLink
} from 'react-bootstrap'
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Button from '@mui/material/Button'
import TelegramIcon from '@mui/icons-material/Telegram';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';

const Header = (props) => {
  const [pathName, setPath] = useState('')
  const [dummy, setDum] = useState(true)

  useEffect(() => setPath(window.location.pathname), [dummy])


  console.log(pathName)
  return (
      <Navbar expand='lg' sticky='top' className='header'>
        <NavLink as={Link} to='/' className='header_home' onClick={() => setDum(!dummy)}>
          <NavbarBrand >
            <HomeIcon className='ICON'/>
          </NavbarBrand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{marginRight: "6px"}}/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='header_left'>
            <NavLink as={Link} to='/portfolio' onClick={ () => setDum(!dummy)} className={pathName == '/portfolio' ? "header_link_active": "header_link"} >
              Portfolio
            </NavLink>
            <NavLink as={Link} to='/resume' onClick={ () => setDum(!dummy)} className={pathName == '/resume' ? "header_link_active": "header_link"}>
              Resume
            </NavLink>
            <NavLink as={Link} to='/contact' onClick={ () => setDum(!dummy)} className={pathName == '/contact' ? "header_link_active": "header_link"}>
              Contact
            </NavLink>
          </Nav>
          <div className='header-right'>
            <a href='https://github.com/RYESAN58' target='_blank'>
              <GitHubIcon className='iconss'/>
            </a>
            <a href='https://www.linkedin.com/in/ryan-santiago-4111a4166/' target='_blank'>
              <LinkedInIcon className='iconss'/>
            </a>
            <a href='https://twitter.com/__worst' target='_blank'>
              <TwitterIcon className='iconss'/>
            </a>
            <Button variant="contained" className='buttons' style={{margin:'0px'}}>Hire Me!<TelegramIcon/></Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default Header