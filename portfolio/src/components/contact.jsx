import React, { useState, useRef, useEffect} from 'react'
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import emailjs from 'emailjs-com'
import "../App.css"
import Grid from '@mui/material/Grid'


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false)
  const[emailError, setEmailError] = useState('')
  const[nameError, setNameError] = useState('')
  const [display, setDisplay] = useState('')
  const form = useRef();
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [validator, setValiditor] = useState('')


  const handleName = (e) => {
    if(e.target.value.length < 1) {
      setNameError("Name is Required!");
  } else if(e.target.value.length < 3) {
      setNameError("Name must be 3 characters or longer");
  } else {
      setNameError("");
  }
    setName(e.target.value)

  }
  const handleEmail = (e) => {
    if(e.target.value.length < 1) {
      setEmailError("Email is required!");
  } else if(!e.target.value.match(validRegex)) {
      setEmailError("Must be an Email");
  } else {
      setEmailError("");
  }
    setEmail(e.target.value)
  }

  const handleMessage = (e) => {
    setMessage(e.target.value)
  }

  const submit = (e) => {
    if(!name || !email){
      setValiditor("Must Fill out form")
      return;
    }else if(nameError || emailError){
      return
    }
    e.preventDefault()
    console.log()
    emailjs.sendForm('service_gqmb9aj', 'template_u6oknll', form.current, 'ttrUFwApjoTD2Kkcu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      console.log(e.target)
    setValiditor('')
    setEmailSent(!emailSent)
    e.target.reset()
  }
  
  return (
    <Grid container >
      <Grid item lg={6}>
        <Grid item className='grid_title mb-30' xs={12}>
          <span style={{width:"70px"}}></span>
          <h5 className='section_text'> Contact </h5>
        </Grid>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          ref={form}
          onSubmit={submit}
        >
          <Grid  container spacing={2}>
            <Grid item xs={12} sm={6}>
              {
                nameError ?
                <p style={{color:"red"}}>{nameError}</p>:
                ""
              }
              <TextField id="outlined-basic" label="Name" variant="outlined" onChange={handleName} name='name'/>
            </Grid>
            <Grid item xs={12} sm={6}>
              {
                emailError ?
                <p style={{color:"red"}}>{emailError}</p>:
                ""
              }
              <TextField type="email" label="Your email address" varaint= 'outlined' onChange={handleEmail} name='email'/>
            </Grid>
            <Grid xs={11} style={{marginTop:"20px", marginLeft:"15px"}} >
              <TextField  type= 'text' variant= 'outlined' label="Message me" onChange={handleMessage} name='message'  fullWidth multiline rows={4}/>
            </Grid>
            <Grid xs={11} style={{marginTop:"20px"}}>
              <Button variant='contained' color='primary' type='submit' className='ml' style={{marginLeft:"17px", display:`${display}`}}>Send Message</Button>
            </Grid>
          {
            emailSent ?
            <div style={{marginLeft:"7px"}}>Thank you for your message, I will be in touch in no time!</div>:
            ''
          }
          {
            validator ?
            <p>{validator}</p>:
            ""
          }
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Contact;