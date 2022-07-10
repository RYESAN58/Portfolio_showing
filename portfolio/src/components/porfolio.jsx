import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs'
import { useState } from 'react';
import Tab from "@mui/material/Tab"
import Card from "@mui/material/Card"
import CardActionArea from "@mui/material/CardActionArea"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Grow from '@mui/material/Grow';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

const Porfolio = () => {
  const [tabValue, setTabValue] = useState('All')
  const [open, setOpen]= useState(false)
  const ProjectDialog = () => {

  }


  return (
    <Grid className="section" container>
      <Grid item lg={12} className='grid_title mb-30'>
        <span style={{width:"76px"}}></span>
        <h5 className='section_text'> Portfolio </h5>
      </Grid>
      <Grid item>
        <Tabs 
        value={tabValue} 
        className='custom_tab' 
        onChange={(e, newValue) => {
          setTabValue(newValue)
          console.log(newValue)
        }}
        >
          <Tab label='All' value="All" className={tabValue== 'All' ? "custom_tabs active": "custom_tabs"} />
          <Tab label='React' value="React" className={tabValue== 'React' ? "custom_tabs active": "custom_tabs"}></Tab>
          <Tab label='Flask' value="Flask" className={tabValue== 'Flask' ? "custom_tabs active": "custom_tabs"}></Tab>
        </Tabs>
        <Grid  item xs={12} style={{marginTop:"10px"}}>
          <Grid container spacing={2}>
            {
              tabValue === 'React' || tabValue == 'All' ?
              <Grid item>
                <Grow in timeout={1000}>
                  <Card onClick={()=>setOpen(true)}>
                    <CardActionArea>
                      <CardMedia className='customCard' component="img" image={require('../Photos/photocred.png')} title='PhotoCred' height="100"/>
                      <CardContent>
                        <Typography className='customCard_title'>
                          PhtotCred
                        </Typography>
                        <Typography className='customCard_desc' variant='body2'>
                          Description
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grow>
                </Grid>:
                ""
              }
              {
                tabValue == "Flask" || tabValue == "All" ?
                <Grid item>
                  <Grow in timeout={1000}>
                    <Card onClick={()=>setOpen(true)}>
                      <CardActionArea>
                        <CardMedia className='customCard'  component="img" image={require('../Photos/Hugo.png')} title='PhotoCred' height="100"/>
                        <CardContent>
                          <Typography className='customCard_title'>
                            JUGO
                          </Typography>
                          <Typography className='customCard_desc' variant='body2'>
                            Description
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>:
                ""
                }
            {/* <Grid item>
              <Grow in timeout={1000}>
                <Card>
                  <CardActionArea>
                    <CardMedia/>
                    <CardContent>
                      <Typography>
                        PhtotCred
                      </Typography>
                      <Typography>
                        Description
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grow>
            </Grid> */}
          </Grid>
          <button >CLICK</button>
        </Grid>
        <div>
          <Dialog open={open} onClose={()=> setOpen(false)}>
            <DialogTitle></DialogTitle>
            <img/>
            <DialogContent>
              Description
            </DialogContent>
            <DialogActions>
              All Actions
            </DialogActions>
          </Dialog>
        </div>
      </Grid>
    </Grid>
  )
}

export default Porfolio