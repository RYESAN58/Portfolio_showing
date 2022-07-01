import React from 'react'
import  Grid  from '@mui/material/Grid';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';



const Resume = () => {
  return (
    <Grid container >
      <Grid item lg={6}>
      <Timeline className='main-time'>
            <TimelineItem className='time1'>
              <TimelineSeparator>
                <TimelineDot className='timeline_dot1'> {<WorkIcon/>}</TimelineDot>
                <TimelineConnector className='Connect' />
              </TimelineSeparator>
              <TimelineContent className='knicks'>
                <span className='ressy'>Technical History</span>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator className='sep-pad'>
                <TimelineDot className='tdot'/>
                <TimelineConnector className='Connect' />
              </TimelineSeparator>
              <TimelineContent className="profileContent">
                <Typography className='titleSpan' style={{fontWeight: "Bold"}}>AT&T</Typography>
                <Typography variant='caption'>
                  2019-2022
                </Typography>
                <p className='ProData'>Supported customers with IT issues by diagnosing, researching, and resolving technical issues.</p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator className='sep-pad'>
                <TimelineDot className='tdot' />
                <TimelineConnector className='Connect' />
              </TimelineSeparator  >
              <TimelineContent className="profileContent">
              <Typography className='titleSpan' style={{fontWeight: "Bold"}}>College Tutor</Typography>
                <Typography variant='caption'>
                  2022-Present
                </Typography>
                <p className='ProData'>Tutor ambitious students in progamming techniques and methods.</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator className='sep-pad'>
                <TimelineDot className='tdot' />
                {/* <TimelineConnector className='Connect' /> */}
              </TimelineSeparator>
              <TimelineContent className="profileContent">
                <Typography className='titleSpan' style={{fontWeight: "Bold"}}>Coding Dojo</Typography>
                <Typography variant='caption'>
                  Nov 2021- June 2022
                </Typography>
                <p className='ProData'>Immersive Full-Stack training program in Python/Flask and MERN</p>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
      </Grid>
      <Grid item lg={6}>
      <Timeline className='main-time'>
            <TimelineItem className='time1'>
              <TimelineSeparator>
                <TimelineDot className='timeline_dot1'> {<SchoolIcon/>}</TimelineDot>
                <TimelineConnector className='Connect' />
              </TimelineSeparator>
              <TimelineContent className='knicks'>
                <div className='ressy'>Education History</div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator className='sep-pad'>
                <TimelineDot className='tdot'/>
                <TimelineConnector className='Connect' />
              </TimelineSeparator>
              <TimelineContent className="profileContent">
              <Typography className='titleSpan' style={{fontWeight: "Bold"}}>Lehman College, CUNY</Typography>
                <Typography variant='caption'>
                  Jan 2022- June 2024
                </Typography>
                <p className='ProData'>Computer Science</p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator className='sep-pad'>
                <TimelineDot className='tdot' />
              </TimelineSeparator  >
              <TimelineContent className="profileContent">
              <Typography className='titleSpan' style={{fontWeight: "Bold"}}>Borough Of Manhattan Community College</Typography>
                <Typography variant='caption'>
                  Jan 2020- June 2022
                </Typography>
                <p className='ProData'>Liberal Arts</p>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
      </Grid>
    </Grid>
  )
}

export default Resume