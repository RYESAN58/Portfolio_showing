import logo from './logo.svg';
import './App.css';
import Saveicon from '@mui/icons-material/Save';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import Profile from './components/profile';
import Header from './components/header';
import Porfolio from './components/porfolio';
import Footer from './components/footer';
import Resume from './components/resume';
import {BrowserRouter, Route, Routes} from 'react-router-dom'



function App() {
  return (
    <Container className='whole_margin'>
      <Grid container>
        <Grid item md={4} lg={3}>
          <Profile/>
        </Grid>
          <Grid item xs>
            <BrowserRouter>
            <Header/>
              <Routes>
                <Route path='/' element={<Porfolio/>}/>
                <Route path='/resume' element={<Resume/>}/>
              </Routes>
            </BrowserRouter>
            <Footer/>
          </Grid>
      </Grid>
    </Container>
  );
}

export default App;
