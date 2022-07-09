import React from 'react'
import Typography from '@mui/material/Typography';
import logo from '../logo.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_left">
        <Typography className="footer_name">
          Ryan Santiago
        </Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyrights">
          Designed and Devoloped by Ryan Santiago
          <br/>
          Created using
          <a href='https://reactjs.org/' target="_blank"><img src={logo} className="app-logo" alt='logo' style={{height: "17px"}}/></a> & <a href='https://mui.com/' target="_blank"><img src={require('../Photos/MUI.png')} alt="MUI logo" style={{height: "17px"}}/></a>,
          Inspired by <a href='https://themeforest.net/search/material%20portfolio' target='_blank'> Travonline</a>.
        </Typography>
      </div>
    </div>
  )
}

export default Footer