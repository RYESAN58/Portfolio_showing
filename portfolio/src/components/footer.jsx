import React from 'react'
import Typography from '@mui/material/Typography';


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
          inspired by <a href='https://themeforest.net/search/material%20portfolio' target='_blank'> Travonline</a>.
        </Typography>
      </div>
    </div>
  )
}

export default Footer