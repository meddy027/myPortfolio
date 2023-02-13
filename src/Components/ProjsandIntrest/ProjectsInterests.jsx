import React from 'react'
import Interests from './Interests'
import './projects.css'

const ProjectsInterests = () => {
  return (
    <div className='proj_Ints container'>
      <h2><span className='section__title'>Projects and Interests</span></h2>
          <div className='project-list'>
            <ul>
              <h3><li className='proj_title'>UI/UX Website Design (JavaScript, React, HTML, CSS, Bootstrap)</li>
                </h3>
                <ul className='proj_description'>
                  <li>
                    <p>Designed, developed, and published a responsive personal portfolio website utilizing HTML5, CSS, and Bootstrap that showcases my skills, interests, and projects in the field of UI/UX design and website development.
                      </p>
                  </li>
                  </ul>
              <h3><li className='proj_title'>Password Cracker / Data Analysis (Python, NumPy, HTML, CSS)</li></h3>
              <ul className='proj_description'>
                <li>
                  <p>Created a password cracker program using Python that can quickly search through a 10 GB file of common passwords, and if not found, generate complex password combinations for cracking attempts. The program was also deployed on a website that demonstrates its functionality in an ethical manner.</p>
                </li>
              </ul>
              <h3><li className='proj_title'>Hangman Game Development (Python, Data Structures, Algorithms)</li></h3>
              <ul className='proj_description'>
                <li>
                  <p>Developed a text-based Hangman game in Python, using data structures and algorithms.
Implemented game logic allowing users to guess a randomly chosen word from 55,909 stored in a text file, and designed game board with ASCII art to reflect player's progress.</p>
                </li>
              </ul>
            </ul>
          </div>
          <div className='interests-list'>
            <h3 className='ints__subtitle'>Interests</h3>
            <div className='Ints container-fluid'>
              <Interests/>
            </div>
          </div>
          
        </div>
            
          
          
          
  )
}

export default ProjectsInterests