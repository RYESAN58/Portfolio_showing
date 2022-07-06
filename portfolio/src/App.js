import './App.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import Profile from './components/profile';
import Header from './components/header';
import Porfolio from './components/porfolio';
import Footer from './components/footer';
import Resume from './components/resume';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import  Index  from './components';
import Contact from './components/contact';



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
              <div className='main-content'>
                <Routes>
                  <Route path='/' element={<Index/>}/>
                  <Route path='/portfolio' element={<Porfolio/>}/>
                  <Route path='/resume' element={<Resume/>}/>
                  <Route path='con' element={<Contact/>}/>
                </Routes>
              </div>
            </BrowserRouter>
            <Footer/>
          </Grid>
      </Grid>
    </Container>
  );
}

export default App;
