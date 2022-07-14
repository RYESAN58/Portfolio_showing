import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import "../App.css"
import Typography from '@mui/material/Typography';
import WorkIcon from '@mui/icons-material/Work';





const CustomTimeline = ({title, children, icon}) => {
  return (
    <Timeline className='main-time'>
      <TimelineItem className='time1'>
        <TimelineSeparator>
          <TimelineDot className='timeline_dot1'>{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant='h6' className='timelineContent1'>
              {title}
            </Typography>
        </TimelineContent>
      </TimelineItem>

      {children}
      <TimelineItem>
        <TimelineSeparator className='sep-pad'>
          <TimelineDot className='tdot'/>
          <TimelineConnector/>
        </TimelineSeparator>
          <TimelineContent>code</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

// export const CustomTimelineSeperator = () => {
//   <TimelineSeparator className='sep-pad'>
//     <TimelineDot className='tdot'/>
//     <TimelineConnector/>
//   </TimelineSeparator>
// };


export default CustomTimeline