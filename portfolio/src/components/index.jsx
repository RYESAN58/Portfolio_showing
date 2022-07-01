import  Grid  from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react'

const Index = () => {
  return (
    <Grid className="section">
      <Grid item className='grid_title mb-30' xs={12}>
        <span></span>
        <h5 className='section_text'> About Me </h5>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='body2' className='me'>
        Being a Software Engineer is more than just programming. It's a chance to help other people through the power of technology. In my tech career so far I've always managed to power people through thier techincal problems. In doing so I developed a thrill and satisfcation with solving problems and wanting to learn more ways I can build on this career. Having this as a job gives us engineers the power to influence other peoples life through programs that could help them with day to day tasks. I strive to be apart of something bigger than myself where I can help develop something that helps thousands of people.
        <p></p>
        <p>Ever since I was small I have always loved technology. Watching TV, playing video games, and listening to music have always been my favorite things to do. I have seen technology everywhere, on my TV set, my phone, and my video game console. As I grew up, I discovered my passion towards technology. At a young age I knew my future would be something technichal.</p>
        <p></p>
        <p>My name is Ryan Santiago, I am a former Techincal support specialist at AT&T, I've achieved a great amounnt of success in most my career even gotten as far as running an entire store and taking lead on some business amazing deals. I've always been very passionate about what I do. But solving problems have been one of my biggest motivators!</p>
        </Typography>
      </Grid>
      <Grid item className='grid_title mb-30' xs={12}>
        <span></span>
        <h5 className='section_text'> My Services </h5>
      </Grid>
    </Grid>
  )
}



export default Index;