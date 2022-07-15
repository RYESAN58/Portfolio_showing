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
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';




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
      <Grid item className='grid_title mb-30' xs={12}>
        <span style={{width:"45px"}}></span>
        <h5 className='section_text'> Skills </h5>
      </Grid>
      <Grid container spacing={3} justify="space-around">
        <Grid item  xs={12} sm={6} md={3}>
          <Paper elevation={3} className='skill '>
            <Typography variant='h6' className='skills_title'>
              FRONT-END
            </Typography>
            <Typography variant='body2' className='skills_desc'>
              <TimelineDot variant={'outlined'} className='skill_dot'/>
              ReactJS
            </Typography>
            <Typography variant='body2' className='skills_desc'>
              <TimelineDot variant={'outlined'} className='skill_dot'/>
              JavaScript
            </Typography>
            <Typography variant='body2' className='skills_desc'>
              <TimelineDot variant={'outlined'} className='skill_dot'/>
              Bootstrap
            </Typography>
            <Typography variant='body2' className='skills_desc'>
              <TimelineDot variant={'outlined'} className='skill_dot'/>
              Material UI
            </Typography>
          </Paper>
        </Grid>
        <Grid item  xs={12} sm={6} md={3}>
          <Paper elevation={3} className='skill'>
            <Typography variant='h6' className='skills_title'>
              BACK-END
            </Typography>
            <Typography variant='body2' className='skills_desc'>
              <TimelineDot variant={'outlined'} className='skill_dot'/>
              Python
            </Typography>
            <Typography variant='body2' className='skills_desc'>
              <TimelineDot variant={'outlined'} className='skill_dot'/>
              Flask
            </Typography>
            <Typography variant='body2' className='skills_desc'>
              <TimelineDot variant={'outlined'} className='skill_dot'/>
              NodeJS
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item  xs={12} sm={6} md={3}>
          <Paper elevation={3} className='skill'>
            <Typography variant='h6' className='skills_title'>
              DATABASES
            </Typography>
            <Typography variant='body2' className='skills_desc'>
              <TimelineDot variant={'outlined'} className='skill_dot'/>
              MySQL
            </Typography>
            <Typography variant='body2' className='skills_desc'>
              <TimelineDot variant={'outlined'} className='skill_dot'/>
              MongoDB
            </Typography>
            <Typography variant='body2' className='skills_desc'>
              <TimelineDot variant={'outlined'} className='skill_dot'/>
              SQLlite
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item  xs={12} sm={6} md={3}>
          <Paper elevation={3} className='skill'>
            <Typography variant='h6' className='skills_title'>
              RESOURCES
            </Typography>
            <Typography variant='body2' className='skills_desc'>
              <TimelineDot variant={'outlined'} className='skill_dot'/>
              Jinja
            </Typography>
            <Typography variant='body2' className='skills_desc'>
              <TimelineDot variant={'outlined'} className='skill_dot'/>
              Postman
            </Typography>
            <Typography variant='body2' className='skills_desc'>
              <TimelineDot variant={'outlined'} className='skill_dot'/>
              Git
            </Typography>
            <Typography variant='body2' className='skills_desc'>
              <TimelineDot variant={'outlined'} className='skill_dot'/>
              GitHub
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      {/* <Grid item xs={12} style={{marginTop:'10px'}}>
        <Grid container>
          <Grid item xs={12}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <h5 className='section_text'>Techinichal Achievements</h5>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ImageList sx={{ width: "auto", height: 450 }} cols={3} rowHeight={164}>
                    <ImageListItem>
                      <img
                        src={require('../Photos/codio.png')}
                        srcSet={require('../Photos/codio.png')}
                        alt={''}
                        loading="lazy"
                        />
                    </ImageListItem>
                    <ImageListItem>
                      <img
                        src={require('../Photos/CSS-UM.png')}
                        srcSet={require('../Photos/CSS-UM.png')}
                        alt={''}
                        loading="lazy"
                        />
                    </ImageListItem>
                  <ImageListItem>
                    <img
                      src={require('../Photos/DOJO.png')}
                      srcSet={require('../Photos/DOJO.png')}
                      alt={''}
                      loading="lazy"
                      />
                  </ImageListItem>
                  <ImageListItem>
                    <img
                      src={require('../Photos/flask_course.png')}
                      srcSet={require('../Photos/flask_course.png')}
                      alt={''}
                      loading="lazy"
                      />
                  </ImageListItem>
                  <ImageListItem>
                    <img
                      src={require('../Photos/git.png')}
                      srcSet={require('../Photos/git.png')}
                      alt={''}
                      loading="lazy"
                      />
                  </ImageListItem>
                </ImageList>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Grid> */}
    </Grid>
  )
}

export default Resume