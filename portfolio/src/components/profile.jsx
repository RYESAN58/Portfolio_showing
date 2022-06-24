import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import "../App.css"
import CustomTimeline from './timeline';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkIcon from '@mui/icons-material/Work';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { createMuiTheme } from '@mui/material';
// const blueTheme = createMuiTheme({ palette: { primary: "skyblue" } })
import DownloadIcon from '@mui/icons-material/Download';




const Profile = () => {

  return (
    <div className='Profile_div'>
      <div >
        <Typography variant="h4" className="name">
          Ryan Santiago
        </Typography>
        <Typography variant="caption"  className= "caption" display="block" gutterBottom>
          Full Stack Software Devoloper
        </Typography >
      </div>
      <figure className="profile_image">
        <img src={require('../Photos/ME.jpg')} />
      </figure>
      <div>
        <div style={{marginLeft:"45px", marginTop: "-50px"}}>
          <Timeline className='main-time'>
            <TimelineItem className='time1'>
              <TimelineSeparator>
                <TimelineDot className='timeline_dot1'> {<AccountCircleIcon/>}</TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator className='sep-pad'>
                <TimelineDot className='tdot'/>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="profileContent">
                <span className='titleSpan'>Name:</span> <p className='ProData'>Ryan Santiago</p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator className='sep-pad'>
                <TimelineDot className='tdot' />
                <TimelineConnector />
              </TimelineSeparator  >
              <TimelineContent className="profileContent">
                <span className='titleSpan'>Birthday:</span> 
                <p className='ProData'>November 05 1992</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator className='sep-pad'>
                <TimelineDot className='tdot' />
                <TimelineConnector />
              </TimelineSeparator  >
              <TimelineContent className="profileContent">
                <span className='titleSpan'>Job:</span>
                <p className='ProData'>Open For Work</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator className='sep-pad'>
                <TimelineDot className='tdot' />
              </TimelineSeparator>
              <TimelineContent className="profileContent">
                <span className='titleSpan'>Email:</span> 
                <p className='ProData'>RyeSan58@gmail.com</p>
                </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
        <br />
        <Button variant="contained" className='buttons'>Download <DownloadIcon/></Button>
      </div>
    </div>
  )
}

export default Profile