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
import GitHub from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { useNavigate } from 'react-router-dom';


const Porfolio = () => {
  const [tabValue, setTabValue] = useState('All')
  const [open, setOpen]= useState(false)
  const [open2, setOpen2]= useState(false)
  const [open3, setOpen3]= useState(false)
  const [open4, setOpen4]= useState(false)




  return (
    <Grid className="section" container>
      <Grid item xs={12} className='grid_title mb-30'>
        <span style={{width:'75px'}}></span>
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
                          An app to share photos with everyone
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
                <Grid item >
                  <Grow in timeout={1000}>
                    <Card onClick={()=>setOpen2(true)}>
                      <CardActionArea>
                        <CardMedia className='customCard'  component="img" image={require('../Photos/Hugo.png')} title='PhotoCred' height="100"/>
                        <CardContent>
                          <Typography className='customCard_title'>
                            JUGO
                          </Typography>
                          <Typography className='customCard_desc' variant='body2'>
                            An ecommerce site to Buy merchindise
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
                <Grid item >
                  <Grow in timeout={1000}>
                    <Card onClick={()=>setOpen3(true)} style={{minWidth:"272.35px"}}>
                      <CardActionArea>
                        <CardMedia className='customCard'  component="img" image={require('../Photos/TVSHOW.png')} title='PhotoCred' height="100"/>
                        <CardContent>
                          <Typography className='customCard_title'>
                            Tv Show Rater
                          </Typography>
                          <Typography className='customCard_desc' variant='body2'>
                            An app to add/like favorite TV shows
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>:
                ""
                }
                {
              tabValue === 'React' || tabValue == 'All' ?
              <Grid item>
                <Grow in timeout={1000}>
                  <Card onClick={()=>setOpen4(true)}>
                    <CardActionArea>
                      <CardMedia className='customCard' component="img" image={require('../Photos/docHelp.png')} title="Doctor's Help" height="100"/>
                      <CardContent>
                        <Typography className='customCard_title'>
                          Doctor's Help via Hack Diversity
                        </Typography>
                        <Typography className='customCard_desc' variant='body2'>
                          an app that helps doctor keep trakc of thier patients X Rays 
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
        </Grid>
        <div>
          <Dialog open={open} onClose={()=> setOpen(false)} className='projectD'>
            <DialogTitle>PhotoCred MERN app</DialogTitle>
            <a href="https://gentle-speculoos-8d25ac.netlify.app/" target='_blank'>
              <img src={require('../Photos/photocred.png')} className='hover projectDPhoto' style={{height:'250px'}}/>
            </a>
            <DialogContent className='projectDDescription'>
              With this project I created an app where users can create events where anyone can post pictures of event. this app was created using REACT, Express, MongoDB, Node.JS. With this app I really wanted to show how I can make a complex backend as well as using third party pps like aws's s3 and I also used Google Maps api so users can see the exact location's of the event. 
            </DialogContent>
            <DialogActions className='projectDActions'>
              <a href="https://github.com/RYESAN58/P-A-Solo-project" target="_blank">
                <GitHub className='iconss' />
              </a>
              <a href="https://gentle-speculoos-8d25ac.netlify.app/" target="_blank">
                <LanguageIcon className='iconss'/>
              </a>
            </DialogActions>
          </Dialog>
        </div>
        <div>
          <Dialog open={open2} onClose={()=> setOpen2(false)} className='projectD'>
            <DialogTitle>Hugo Flask app</DialogTitle>
            <a href="http://34.230.61.245/" target='_blank'>
              <img src={require('../Photos/Hugo.png')} className='hover projectDPhoto' style={{height:'250px'}}/>
            </a>
            <DialogContent>
              <Typography className='projectDDescription'>
                Jugo Ecommerce app using Flask backend. Using flask we made an app where user's can signup and buy Merch with this app we really wanted to display our full stack abilities with front end design and back end logic. We used a MySQL where we hand wrote the codes. 
              </Typography>
            </DialogContent>
            <DialogActions className='projectDActions'>
              <a href="https://github.com/eriVitale/groupProject" target="_blank">
                <GitHub className='iconss' />
              </a>
              <a href="http://34.230.61.245/" target="_blank">
                <LanguageIcon className='iconss'/>
              </a>
            </DialogActions>
          </Dialog>
        </div>
        <div>
          <Dialog open={open3} onClose={()=> setOpen3(false)} className='projectD'>
            <DialogTitle>TV Shows</DialogTitle>
            <a href="http://54.210.47.144/" target='_blank'>
              <img src={require('../Photos/TVSHOW.png')} className='hover projectDPhoto' style={{height:'250px'}}/>
            </a>
            <DialogContent>
              <Typography className='projectDDescription'>
                Using flask I created a CRUD TV show app where users can add, like shows. With this I wanted to display my very unique SQL skills by using many to many relationships as a way to Like shows added by specific users.
              </Typography>
            </DialogContent>
            <DialogActions className='projectDActions'>
              <a href="https://github.com/RYESAN58/Black_belt" target="_blank">
                <GitHub className='iconss' />
              </a>
              <a href="http://54.210.47.144/" target="_blank">
                <LanguageIcon className='iconss'/>
              </a>
            </DialogActions>
          </Dialog>
        </div>
        <div>
          <Dialog open={open4} onClose={()=> setOpen4(false)} className='projectD'>
            <DialogTitle>PhotoCred MERN app</DialogTitle>
            <a href="https://doctorhelp.onrender.com/" target='_blank'>
              <img src={require('../Photos/docHelp.png')} className='hover projectDPhoto' style={{height:'250px'}}/>
            </a>
            <DialogContent className='projectDDescription'>
              With this project I created an app where users can create events where anyone can post pictures of event. this app was created using REACT, Express, MongoDB, Node.JS. With this app I really wanted to show how I can make a complex backend as well as using third party pps like aws's s3 and I also used Google Maps api so users can see the exact location's of the event. 
            </DialogContent>
            <DialogActions className='projectDActions'>
              <a href="https://github.com/The-Ops-HD/Doctor-Help" target="_blank">
                <GitHub className='iconss' />
              </a>
              <a href="https://doctorhelp.onrender.com/" target="_blank">
                <LanguageIcon className='iconss'/>
              </a>
            </DialogActions>
          </Dialog>
        </div>
      </Grid>
    </Grid>
  )
}

export default Porfolio