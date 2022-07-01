import React from 'react'
import  Grid  from '@mui/material/Grid';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';


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
              <TimelineContent>
                <span className='ressy'>Working History</span>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator className='sep-pad'>
                <TimelineDot className='tdot'/>
                <TimelineConnector className='Connect' />
              </TimelineSeparator>
              <TimelineContent className="profileContent">
                <span className='titleSpan'>Name:</span> <p className='ProData'>Ryan Santiago</p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator className='sep-pad'>
                <TimelineDot className='tdot' />
                <TimelineConnector className='Connect' />
              </TimelineSeparator  >
              <TimelineContent className="profileContent">
                <span className='titleSpan'>Birthday:</span> 
                <p className='ProData'>November 05 1992</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator className='sep-pad'>
                <TimelineDot className='tdot' />
                <TimelineConnector className='Connect' />
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
      </Grid>
      <Grid item lg={6}>
      <Timeline className='main-time'>
            <TimelineItem className='time1'>
              <TimelineSeparator>
                <TimelineDot className='timeline_dot1'> {<SchoolIcon/>}</TimelineDot>
                <TimelineConnector className='Connect' />
              </TimelineSeparator>
              <TimelineContent>
                <span className='ressy'>Education History</span>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator className='sep-pad'>
                <TimelineDot className='tdot'/>
                <TimelineConnector className='Connect' />
              </TimelineSeparator>
              <TimelineContent className="profileContent">
                <span className='titleSpan'>Name:</span> <p className='ProData'>Ryan Santiago</p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator className='sep-pad'>
                <TimelineDot className='tdot' />
                <TimelineConnector className='Connect' />
              </TimelineSeparator  >
              <TimelineContent className="profileContent">
                <span className='titleSpan'>Birthday:</span> 
                <p className='ProData'>November 05 1992</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator className='sep-pad'>
                <TimelineDot className='tdot' />
                <TimelineConnector className='Connect' />
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
      </Grid>
    </Grid>
  )
}

export default Resume