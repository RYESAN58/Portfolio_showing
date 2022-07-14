import  Grid  from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react'
import WebIcon from '@mui/icons-material/Web';
import AlarmIcon from '@mui/icons-material/Alarm';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Paper from '@mui/material/Paper';


const Index = () => {
  return (
    <Grid className="section">
      <Grid className='grid_title mb-30'>
        <span></span>
        <h5 className='section_text'> About Me </h5>
      </Grid>
      <Grid>
        <Typography variant='body2' className='me'>
        Being a Software Engineer is more than just programming. It's a chance to help other people through the power of technology. In my tech career so far I've always managed to power people through their technical problems. In doing so, I developed a thrill and satisfcation with solving problems and wanting to learn more ways I can build on this career. Having this as a career gives us engineers the power to influence other peoples' lives. I strive to be apart of something bigger than myself where I can help develop something that helps thousands of people.
        <br/>
        <p>Ever since I was younger I have always loved technology. Watching TV, playing video games, and listening to music have always been my favorite things to do. I have seen technology everywhere; on my TV set, my phone, and my video game console. As I grew up, I discovered my passion towards technology. At a young age I knew my future would have to do with technology.</p>
        <br/>
        <p>My name is Ryan Santiago. I am a former technical support specialist / Sales Representative / Retail Store Manager  at AT&T. I've achieved a great amount of success in my career, even gotten as far as running an entire store and taking lead on some amazing business deals. I've always been very passionate about what I do. But solving problems have been one of my biggest motivators!</p>
        </Typography>
      </Grid>
      <Grid className='section'>
        <Grid  item className='grid_title mb-30' xs={12}>
          <span></span>
          <h5 className='section_text'> My Services </h5>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} justify="space-around">
            <Grid item xs={12} sm={6} md={3} className='service'> 
              <Paper elevation={3} style={{padding:"5px"}} className="service_paper">
                <WebIcon className='service_icon'/>
                <Typography variant="h6" className='service_title'>
                  Web Development
                </Typography>
                <Typography variant="body2" className='service_desc'>
                  Passionate Developer who reallly puts his heart in his code!
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className='service'> 
              <Paper elevation={3} style={{padding:"5px"}} className="service_paper">
                <AlarmIcon className='service_icon'/>
                <Typography variant="h6" className='service_title'>
                  Fast Delivery 
                </Typography>
                <Typography variant="body2" className='service_desc'>
                  I deliver full proof solutions in timley manner. 
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className='service'>
              <Paper elevation={3} style={{padding:"5px"}} className="service_paper">
                <SupportAgentIcon className='service_icon'/>
                <Typography variant="h6" className='service_title'>
                  Technichal Support 
                </Typography>
                <Typography variant="body2" className='service_desc'>
                  Will offer support to partners, clients and teamates.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className='service'> 
              <Paper elevation={3} style={{padding:"5px"}} className="service_paper">
                <TrendingUpIcon className='service_icon'/>
                <Typography variant="h6" className='service_title'>
                  Sales & Branding 
                </Typography>
                <Typography variant="body2" className='service_desc'>
                  Expert at understanding the needs of clients and creating a brand that fits.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}



export default Index;