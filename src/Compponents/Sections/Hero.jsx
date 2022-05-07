import React from 'react'
import {FaArrowDown} from 'react-icons/fa'
import { HeroSection,HeroContent, Arrow } from '../Styles/sections/Hero'
import Typical from 'react-typical'
import { CTA } from '../Styles/Layout/Common'


const Hero = () => {
  return (
      <>
    
    
{/* <div className='hero'> */}
    <HeroSection>
{/* <div style={{backgroundRepeat:'no-repeat'}}> */}
  <HeroContent id='hero'>
   <h1> hello am Peter Gachau</h1> 
   <h3 className='hero-text'>
                            {''}
                            <Typical
                            loop={Infinity}
                            steps={[
                                '{Fullstack web Dev}',
                                2000,
                                '{Mern Stack Dev}',
                                2000,
                                '{react-Native Developer}',
                                2000,
                                '{DataScientist /python}',
                                2000,
                            ]}
                            />

                        </h3>
                        <div className='btn'>
                          <CTA className='btn-1' href='#projects'>Projects</CTA>
                          <CTA className='btn-2' href='PETERGACHAU CV.pdf' download='PETERGACHAU CV.pdf' primary margin ='20px 0 0 50px' >
              get resume
            </CTA>
                        </div>
  </HeroContent>
 
{/* </div> */}
 <Arrow href='#about'>
<FaArrowDown/>
 </Arrow>
  </HeroSection>
    {/* </div> */}
    
    </>
  )
}

export default Hero