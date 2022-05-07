import Footer from './Compponents/Footer/Footer'
import {ThemeProvider} from 'styled-components'
import Navbar from './Compponents/Layout/Navbar';
import Hero from './Compponents/Sections/Hero';
import {GlobalStyles} from './Compponents/Styles/Global.styled'
import About from './Compponents/About';
import Projects from './Compponents/projects/Projects'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Compponents/Contact/Contact'
const App=()=> {
  const theme={
    colors:{
      white:'rgba(240,247,255,1)',
      navyBlue:'rgba(2,12,27,1)',
      lightNavyBlue:'rgba(4,22,48,1)',
     green:'rgba(8,286,158,1)',
      orange:'rgba(249,185,14,1)',
      purple:'rgba(182,51,153,1)',
    },
    mobile:'768px',
    transition:'all 658ms ease-in-out'  }
  return (
    <>
    <BrowserRouter>
     <ThemeProvider theme={theme}>
       <GlobalStyles/>
       
       <Navbar/>
       <Hero/>
      
       
      
      <hr/>
        <About/>
       <hr/>

       <Projects/>
       <hr/>
       <Contact/>
       <hr/>
       <Footer/>
       <hr/>
     </ThemeProvider>
     </BrowserRouter>
     
    </>
  );
}

export default App;
