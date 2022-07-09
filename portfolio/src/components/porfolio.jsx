import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs'
import { useState } from 'react';
import Tab from "@mui/material/Tab"

const Porfolio = () => {
  const[tabValue, setTabValue] = useState('All')

  return (
    <Grid className="section" container>
      <Grid item lg={12} className='grid_title mb-30'>
        <span style={{width:"76px"}}></span>
        <h5 className='section_text'> Portfolio </h5>
      </Grid>
      <Grid item>
        <Tabs 
        value={tabValue} 
        indicatorColor="white" 
        className='custom_tab' 
        onChange={(event, newValue) => setTabValue(newValue)}>
          <Tab label='All' value="All" className={tabValue== 'All' ? "custom_tabs active": "custom_tabs"}/>
          <Tab>Python</Tab>
        </Tabs>
      </Grid>
    </Grid>
  )
}

export default Porfolio