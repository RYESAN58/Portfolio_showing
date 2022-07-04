import  Grid  from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react'
import WebIcon from '@mui/icons-material/Web';
import AlarmIcon from '@mui/icons-material/Alarm';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';


const Index = () => {
  return (
    <Grid className="section">
      <Grid item className='grid_title mb-30' xs={12}>
        <span></span>
        <h5 className='section_text'> About Me </h5>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='body2' className='me'>
        Being a Software Engineer is more than just programming. It's a chance to help other people through the power of technology. In my tech career so far I've always managed to power people through their technical problems. In doing so, I developed a thrill and satisfcation with solving problems and wanting to learn more ways I can build on this career. Having this as a career gives us engineers the power to influence other peoples' lives. I strive to be apart of something bigger than myself where I can help develop something that helps thousands of people.
        <p></p>
        <p>Ever since I was younger I have always loved technology. Watching TV, playing video games, and listening to music have always been my favorite things to do. I have seen technology everywhere; on my TV set, my phone, and my video game console. As I grew up, I discovered my passion towards technology. At a young age I knew my future would have to do with technology.</p>
        <p></p>
        <p>My name is Ryan Santiago. I am a former technical support specialist / Sales Representative / Retail Store Manager  at AT&T. I've achieved a great amount of success in my career, even gotten as far as running an entire store and taking lead on some amazing business deals. I've always been very passionate about what I do. But solving problems have been one of my biggest motivators!</p>
        </Typography>
      </Grid>
      <Grid className='section'>
        <Grid className='grid_title mb-30' xs={12}>
          <span></span>
          <h5 className='section_text'> My Services </h5>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} sm={6} md={3}> 
              <WebIcon/>
              <Typography variant="h6">
                Web Development
              </Typography>
              <Typography variant="body2">
                Passionate Developer who reallly puts his heart in his code!
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}> 
              <AlarmIcon/>
              <Typography variant="h6">
                Fast Delivery 
              </Typography>
              <Typography variant="body2">
                I deliver full proof solutions in timley manner. 
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}> 
              <SupportAgentIcon/>
              <Typography variant="h6">
                Technichal Support 
              </Typography>
              <Typography variant="body2">
                Will offer support to partners, clients and teamates.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}> 
              <TrendingUpIcon/>
              <Typography variant="h6">
                Sales & Branding 
              </Typography>
              <Typography variant="body2">
                Expert at understanding the needs of clients and creating a brand that fits.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}



export default Index;