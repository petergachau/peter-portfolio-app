import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './projects.css'
const Projects = () => {
  return (
    <div id='projects'>
      <h5 className="project-title">my projects</h5>
      <div className="underline"></div>
      <div className="main-card-projects">
        
      <div className="card-projects">
          <h4 className='project-title'>reactjs</h4>
          <div className='native'>
          <div className="rating"></div><span className='embend'></span>
        </div>
        <a className='native-1'  href='https://001-resort.netlify.app/'>check out</a>
        </div>
        
        <div className="card-projects">
          <h4 className='project-title'>html</h4>
          <div className='native'>
          <div className="rating"></div><span className='embend'></span>
        </div>
        <a className='native-1'  href='https://001-resort.netlify.app/'>check out</a>

        </div>
        <div className="card-projects">
          <h4 className='project-title'>Nodejs</h4>
          <div className='native'>
          <div className="rating"></div><span className='embend'></span>
        </div>
        <a className='native-1'  href='https://001-resort.netlify.app/'>check out</a>
        </div>
        <div className="card-projects">
          <h4 className='project-title'>DataScience</h4>
          <div className='native'>
          <div className="rating"></div><span className='embend'></span>
        </div>
        </div>
        <div className="card-projects">
          <h4 className='project-title'>GraphicDesign</h4>
          <div className='native'>
          <div className="rating"></div><span className='embend'></span>
        </div>
        <a className='native-1'  href='https://001-resort.netlify.app/'>check out</a>

        </div>
        <div className="card-projects">
          <h4 className='project-title'>Mern Stack</h4>
          <div className='native'>
          <div className="rating"></div><span className='embend'></span>
        </div>
        <a className='native-1'  href='https://001-resort.netlify.app/'>check out</a>

        </div>
        <div className="card-projects">
          <h4 className='project-title'>MongoDb </h4>
          <div className='native'>
          <div className="rating"></div><span className='embend'></span>
        </div>
        </div>
        <div className="card-projects">
          <h4 className='project-title'>css</h4>
          <div className='native'>
          <div className="rating"></div><span className='embend'></span>
        </div>
        </div>
       
      </div>
      
      <Link className='home-btn' smooth to='#home'  >Home</Link>
    </div>
  )
}

export default Projects